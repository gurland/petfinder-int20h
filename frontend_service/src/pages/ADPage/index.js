import React, { useEffect, useState } from 'react';
import './style.scss';
import { Grid, Card, Button, Loader } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';

import NotFoundImage from '../../img/not-found.jpg';
import { getAd } from '../../utils/api/requests';
import { GoogleMap } from '../../components';
import { useMarker } from '../../utils/hooks';

function ADPage() {
  const { id } = useParams();
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setMarkerPos, mapRef, mapsRef } = useMarker();

  const onMapLoad = () => {
    if (ad) {
      setMarkerPos({
        lat: ad.latitude,
        lng: ad.longitude,
      });
    }
  };

  useEffect(() => {
    if (ad) {
      setMarkerPos({
        lat: ad.latitude,
        lng: ad.longitude,
      });
    }
  }, [ad]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, status } = await getAd(id);
      if (status === 200) {
        setAd(data);
      }
      setLoading(false);
    })();
  }, [id]);

  const { species, breed, color, user_email, user_phone, user_username, description, is_lost, photo } = ad || {};
  const imageSrc = photo ? `${new URL(process.env.REACT_APP_API_URL).origin}/${photo}` : NotFoundImage;

  return loading ? (
    <div className="app-main" style={{ height: '100%' }}>
      <div className="main-content">
        <Loader active inline="centered" size="massive" inverted>
          Завантаження...
        </Loader>
      </div>
    </div>
  ) : (
    <Grid centered className="advertisement-grid">
      <Grid.Column mobile={16} computer={6} className="left">
        <div className="images-wrap">
          <img className="pet-image" src={imageSrc} wrapped ui={false} />
          {/*<Carousel>*/}
          {/*  <img className="pet-image" src={NotFoundImage} wrapped ui={false} />*/}
          {/*  <img className="pet-image" src={NotFoundImage} wrapped ui={false} />*/}
          {/*  <img className="pet-image" src={NotFoundImage} wrapped ui={false} />*/}
          {/*</Carousel>*/}
        </div>
        <div className="map">
          <GoogleMap
            mapRef={mapRef}
            mapsRef={mapsRef}
            onMapLoad={onMapLoad}
            center={{
              lat: ad?.latitude,
              lng: ad?.longitude,
            }}
          />
        </div>
      </Grid.Column>
      <Grid.Column mobile={16} computer={10} className="right">
        <h2>{`${is_lost ? 'Загублено' : 'Знайдено'}. ${species}, ${breed}, ${color}`}</h2>
        <Card className="card-description">
          <Card.Content>
            <Card.Description>
              <div className="info-wrap">
                <span>Email: {user_email}</span>
              </div>
              <div className="info-wrap">
                <span>Телефон: {user_phone}</span>
              </div>
              <div className="info-wrap">
                <span>Ім'я: {user_username}</span>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card className="card-content">
          <Card.Content>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default ADPage;
