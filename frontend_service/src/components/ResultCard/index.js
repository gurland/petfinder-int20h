import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import { links } from '../../utils/constants';

function ResultCard({ resultData }) {
  return (
    <Link
      to={{
        pathname: `/ad/${resultData.id}`,
      }}
    >
      <Card className="result-card">
        <Image src={resultData.image ? resultData.image : './img/not-found.jpg'} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{resultData.header}</Card.Header>
          <Card.Description>{resultData.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>{resultData.date}</Card.Content>
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
  }),
};

export default ResultCard;
