import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { Container, Card, Input, Dropdown, TextArea, Form, Header, Button } from 'semantic-ui-react';
import { GoogleMap } from '../../components';
import './style.scss';

const options = [
  { text: 'Кіт', value: 'cat' },
  { text: 'Собака', value: 'dog' },
  { text: 'Інший вид', value: 'other' },
];

function CreateAdPage({ isLost }) {
  const mapRef = useRef(null);
  const mapsRef = useRef(null);

  const [animalType, setAnimalType] = useState(null);
  const [animalTypeValue, setAnimalTypeValue] = useState('');
  const [circleRadius, setCircleRadius] = useState(100);
  const [circle, setCircle] = useState(null);
  const [markerPos, setMarkerPos] = useState(null);
  const [marker, setMarker] = useState(null);

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

  useEffect(() => {
    if (mapRef.current && mapsRef.current) {
      if (circle) circle.setMap(null);

      setCircle(
        new mapsRef.current.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.3,
          center: markerPos,
          map: mapRef.current,
          radius: circleRadius,
        }),
      );
    }
  }, [circleRadius, markerPos]);

  useEffect(() => {
    if (mapRef.current && mapsRef.current) {
      if (marker) marker.setMap(null);

      setMarker(
        new mapsRef.current.Marker({
          position: markerPos,
          map: mapRef.current,
        }),
      );
    }
  }, [markerPos]);

  const onMapClick = ({ lng, lat }) => setMarkerPos({ lng, lat });

  return (
    <>
      <div className="ad-page-title">
        <Header>{`Створити оголошення ${isLost ? 'пошуку' : 'пропажі'}`}</Header>
      </div>
      <Container className="create-ad-page">
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
                <TextArea placeholder="Опис" name="description" onChange={handleChange} value={values.description} />
              </Form.Field>
              <Form.Field>
                <Input type="date" placeholder="Дата" name="date" onChange={handleChange} value={values.date} />
              </Form.Field>
              <Form.Field>
                <Input
                  type="file"
                  placeholder="Фото"
                  name="photo"
                  onChange={(e) => setFieldValue('photo', e.currentTarget.files[0])}
                />
              </Form.Field>
            </Form>
            <label htmlFor="circle-radius">Радіус області пошуку: {circleRadius / 1000} км</label>
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
            <div className="map-wrapper">
              <GoogleMap onClick={onMapClick} mapRef={mapRef} mapsRef={mapsRef} />
            </div>
          </Card.Content>
          <Card.Content extra>
            <Button style={{ marginTop: '10px' }}>Створити</Button>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
}

CreateAdPage.propTypes = {
  isLost: PropTypes.bool,
};

CreateAdPage.defaultProps = {
  isLost: false,
};

export default CreateAdPage;