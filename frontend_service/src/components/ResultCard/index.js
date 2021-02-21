import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { Card, Image } from 'semantic-ui-react';
import { links } from '../../utils/constants';
import NotFoundImage from '../../img/not-found.jpg';

function ResultCard({ resultData }) {
  const imageSrc = resultData.photo
    ? `${new URL(process.env.REACT_APP_API_URL).origin}/${resultData.photo}`
    : NotFoundImage;

  const { species, breed, color, user_email, user_phone, user_username, description, is_lost, photo } =
    resultData || {};

  return (
    <Link
      to={{
        pathname: `/ad/${resultData.id}`,
      }}
    >
      <Card className="result-card">
        <Image src={imageSrc} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{`${species}, ${breed}, ${color}`}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span className={!is_lost ? 'type found' : 'type lost'}>{is_lost ? 'Загублено' : 'Знайдено'}.</span>
          <span className="date">{moment(resultData.date).format('YYYY-MM-DD')}</span>
        </Card.Content>
      </Card>
    </Link>
  );
}

ResultCard.propTypes = {
  resultData: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    header: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.oneOf(['found', 'lost']),
  }),
};

export default ResultCard;
