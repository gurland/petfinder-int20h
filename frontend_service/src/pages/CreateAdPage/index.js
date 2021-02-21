import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { Card, Input, Dropdown, TextArea, Form, Button } from 'semantic-ui-react';
import { GoogleMap } from '../../components';
import { useMarker } from '../../utils/hooks';
import './style.scss';
import { createAd } from '../../utils/api/requests';
import { useHistory } from 'react-router-dom';
import { links } from '../../utils/constants';

const options = [
  { text: 'Кіт', value: 'cat' },
  { text: 'Собака', value: 'dog' },
  { text: 'Інший вид', value: 'other' },
];

function CreateAdPage({ isLost }) {
  const [animalType, setAnimalType] = useState(null);
  const [animalTypeValue, setAnimalTypeValue] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { setMarkerPos, mapRef, mapsRef, markerPos } = useMarker(true);

  const { handleChange, values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      animalType: '',
      color: '',
      breed: '',
      description: '',
      photo: null,
      date: '',
    },
    onSubmit: ({ animalType, date, ...values }) => {
      const fileReader = new FileReader();
      const requestParams = {
        species: animalTypeValue,
        longitude: markerPos.lng,
        latitude: markerPos.lat,
        is_lost: isLost,
        date: new Date(date),
        ...values,
      };

      fileReader.addEventListener('load', () => {
        requestParams.photo = fileReader.result;

        (async () => {
          setLoading(true);
          const { status } = await createAd(requestParams);
          if (status === 200) {
            history.push(links.homepage);
          }
          setLoading(false);
        })();
      });

      fileReader.readAsDataURL(values.photo);
    },
  });

  const onMapClick = ({ lng, lat }) => setMarkerPos({ lng, lat });

  return (
    <div className="form-wrap">
      <h2>{`Створити оголошення про ${isLost ? 'загублену' : 'знайдену'} тварину`}</h2>
      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <Dropdown
                placeholder="Виберіть вид..."
                selection
                options={options}
                onChange={(e, data) => {
                  handleChange({ target: { value: data.value } });
                  setAnimalType(data.value);
                  if (data.value !== 'other') {
                    const selectedOption = options.find(({ value }) => value === data.value);
                    setAnimalTypeValue(selectedOption.text.toLowerCase());
                  } else {
                    setAnimalTypeValue('');
                  }
                }}
                value={animalType}
              />
              {animalType === 'other' && (
                <Input
                  className=""
                  placeholder="Введіть вид..."
                  onChange={(e) => setAnimalTypeValue(e.target.value)}
                  value={animalTypeValue}
                />
              )}
            </Form.Field>
            <Form.Field>
              <Input placeholder="Колір" name="color" onChange={handleChange} value={values.color} />
            </Form.Field>
            <Form.Field>
              <Input placeholder="Порода" name="breed" onChange={handleChange} value={values.breed} />
            </Form.Field>
            <Form.Field>
              <TextArea
                className="ui textarea"
                placeholder="Опис"
                name="description"
                onChange={handleChange}
                value={values.description}
              />
            </Form.Field>
            <Form.Field>
              <Input type="date" placeholder="Дата" name="date" onChange={handleChange} value={values.date} />
            </Form.Field>
            <Form.Field>
              <Input
                className="mb-0"
                type="file"
                placeholder="Фото"
                name="photo"
                onChange={(e) => setFieldValue('photo', e.currentTarget.files[0])}
              />
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>

      <div className="map-wrapper">
        <GoogleMap onClick={onMapClick} mapRef={mapRef} mapsRef={mapsRef} />
      </div>

      <div className="bottom-btn-wrap">
        <Button positive size="large" onClick={handleSubmit} loading={loading}>
          Створити
        </Button>
      </div>
    </div>
  );
}

CreateAdPage.propTypes = {
  isLost: PropTypes.bool,
};

CreateAdPage.defaultProps = {
  isLost: false,
};

export default CreateAdPage;
