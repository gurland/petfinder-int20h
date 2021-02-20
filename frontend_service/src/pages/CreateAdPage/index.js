import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { Card, Input, Dropdown, TextArea, Form, Button } from 'semantic-ui-react';
import { GoogleMap } from '../../components';
import { useMarker } from '../../utils/hooks';
import './style.scss';

const options = [
  { text: 'Кіт', value: 'cat' },
  { text: 'Собака', value: 'dog' },
  { text: 'Інший вид', value: 'other' },
];

function CreateAdPage({ isLost }) {
  const [animalType, setAnimalType] = useState(null);
  const [animalTypeValue, setAnimalTypeValue] = useState('');

  const { setCircleRadius, setMarkerPos, circleRadius, mapRef, mapsRef } = useMarker();

  const { handleChange, values, setFieldValue } = useFormik({
    initialValues: {
      animalType: '',
      color: '',
      breed: '',
      description: '',
      photo: null,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
                  }
                }}
                value={animalType}
              />
              {animalType === 'other' && (
                <Input
                  className=""
                  placeholder="Введіть вид..."
                  name="animalType"
                  onChange={handleChange}
                  value={values.animalType}
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

      <div className="range-select-wrap">
        <label htmlFor="circle-radius" class="radius-header">Радіус області пошуку: {circleRadius / 1000} км</label>
        <div class="range-select">
          <label htmlFor="circle-radius">100 м</label>
          <Input
            type="range"
            id="circle-radius"
            min={100}
            max={5000}
            step={100}
            value={circleRadius}
            onChange={(e, data) => setCircleRadius(() => (data.value ? parseInt(data.value, 10) : 100))}
          />
          <label htmlFor="circle-radius">5 км</label>
        </div>
      </div>
      <div className="map-wrapper">
        <GoogleMap onClick={onMapClick} mapRef={mapRef} mapsRef={mapsRef} />
      </div>

      <div className="bottom-btn-wrap">
        <Button positive size='large'>Створити</Button>
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
