import React from 'react';
import { Form, Card, Input, Checkbox, Button } from 'semantic-ui-react';

import { useFormik } from 'formik';
import { GoogleMap } from '../../components';
import { useMarker } from '../../utils/hooks';

import './style.scss';

function ProfilePage() {
  const { mapsRef, mapRef, setMarkerPos, circleRadius, setCircleRadius } = useMarker();
  const onMapClick = ({ lng, lat }) => setMarkerPos({ lng, lat });

  const { handleChange, values, setFieldValue } = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      contact_info: '',
      phone: '',
      telegram: '',
      notifications: false,
    },
  });

  return (
    <div className="profile-page main-content">
      <Form>
        <Card>
          <Card.Content>
            <Form.Field>
              <Input
                type="email"
                placeholder="Електронна пошта"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </Form.Field>
            <Form.Field>
              <Input
                type="password"
                placeholder="Пароль"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
            </Form.Field>
            <Form.Field>
              <Input placeholder="Ім'я користувача" name="username" onChange={handleChange} value={values.username} />
            </Form.Field>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Form.Field>
              <Input
                placeholder="Контактна інформація"
                name="contact_info"
                onChange={handleChange}
                value={values.contact_info}
              />
            </Form.Field>
            <Form.Field>
              <Input
                type="phone"
                placeholder="Мобільний телефон"
                name="phone"
                onChange={handleChange}
                value={values.phone}
              />
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Ім'я користувача в Telegram"
                name="telegram"
                onChange={handleChange}
                value={values.telegram}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                toggle
                label="Сповіщення"
                name="notifications"
                onChange={(e, data) => setFieldValue('notifications', data.checked)}
                value={values.notifications}
              />
            </Form.Field>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <div className="range-select-wrap">
              <label htmlFor="circle-radius" className="radius-header">
                Радіус області пошуку: {circleRadius / 1000} км
              </label>
              <div className="range-select">
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
          </Card.Content>
        </Card>
        <div className="bottom-btn-wrap">
          <Button positive size="large">
            Зберегти
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ProfilePage;
