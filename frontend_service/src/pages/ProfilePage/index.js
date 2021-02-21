import React, { useEffect, useRef, useState } from 'react';
import { Form, Card, Input, Checkbox, Button, Loader } from 'semantic-ui-react';

import { useFormik } from 'formik';
import { GoogleMap } from '../../components';
import { useMarker } from '../../utils/hooks';

import './style.scss';
import { getProfile, updateProfile } from '../../utils/api/requests';

function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [profile, setProfile] = useState({});
  const { mapsRef, mapRef, setMarkerPos, circleRadius, setCircleRadius, markerPos } = useMarker();
  const onMapClick = ({ lng, lat }) => setMarkerPos({ lng, lat });
  const onMapLoad = () => {
    if (!!Object.keys(profile).length) {
      setCircleRadius(profile.radius);
      setMarkerPos({
        lat: profile.latitude,
        lng: profile.longitude,
      });
    }
  };

  useEffect(() => {
    if (!!Object.keys(profile).length) {
      setCircleRadius(profile.radius);
      setMarkerPos({
        lat: profile.latitude,
        lng: profile.longitude,
      });
    }
  }, [profile]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, status } = await getProfile();
      if (status === 200) {
        setProfile(data);
      }
      setLoading(false);
    })();
  }, []);

  const { handleChange, values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      email: profile.email || '',
      password: '',
      username: profile.username || '',
      // contact_info: '',
      phone: profile.phone || '',
      // notifications: false,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      setUpdating(true);
      const { data, status } = await updateProfile({
        ...values,
        latitude: markerPos.lat,
        longitude: markerPos.lng,
        radius: circleRadius,
      });
      if (status === 200) {
        setProfile(data);
      }
      setUpdating(false);
    },
  });

  return loading ? (
    <div className="app-main" style={{ height: '100%' }}>
      <div className="main-content">
        <Loader active inline="centered" size="massive" inverted>
          Завантаження...
        </Loader>
      </div>
    </div>
  ) : (
    <Form className="form-wrap">
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
            <Input
              className="mb-0"
              placeholder="Ім'я користувача"
              name="username"
              onChange={handleChange}
              value={values.username}
            />
          </Form.Field>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          {/*<Form.Field>*/}
          {/*  <Input*/}
          {/*    placeholder="Контактна інформація"*/}
          {/*    name="contact_info"*/}
          {/*    onChange={handleChange}*/}
          {/*    value={values.contact_info}*/}
          {/*  />*/}
          {/*</Form.Field>*/}
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
            <a href={profile.tg_url}>{profile.is_tg_connected ? "Переприв'язати аккаунт" : "Прив'язати аккаунт"}</a>
          </Form.Field>
          {/*<Form.Field>*/}
          {/*  <Input*/}
          {/*    placeholder="Ім'я користувача в Telegram"*/}
          {/*    name="telegram"*/}
          {/*    onChange={handleChange}*/}
          {/*    value={values.telegram}*/}
          {/*  />*/}
          {/*</Form.Field>*/}
          {/*<Form.Field>*/}
          {/*  <Checkbox*/}
          {/*    className="custom-toggle"*/}
          {/*    toggle*/}
          {/*    label="Сповіщення"*/}
          {/*    name="notifications"*/}
          {/*    onChange={(e, data) => setFieldValue('notifications', data.checked)}*/}
          {/*    value={values.notifications}*/}
          {/*  />*/}
          {/*</Form.Field>*/}
        </Card.Content>
      </Card>

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
        <GoogleMap
          onClick={onMapClick}
          mapRef={mapRef}
          mapsRef={mapsRef}
          onMapLoad={onMapLoad}
          center={{
            lat: profile.latitude,
            lng: profile.longitude,
          }}
        />
      </div>

      <div className="bottom-btn-wrap">
        <Button positive size="large" loading={updating} onClick={handleSubmit}>
          Зберегти
        </Button>
      </div>
    </Form>
  );
}

export default ProfilePage;
