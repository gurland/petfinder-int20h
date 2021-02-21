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
  const { setCircleRadius, setMarkerPos, circleRadius, mapRef, mapsRef, markerPos } = useMarker();

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
          <img className="pet-image" src={NotFoundImage} wrapped ui={false} />
          {/*<Carousel>*/}
          {/*  <img className="pet-image" src={NotFoundImage} wrapped ui={false} />*/}
          {/*  <img className="pet-image" src={NotFoundImage} wrapped ui={false} />*/}
          {/*  <img className="pet-image" src={NotFoundImage} wrapped ui={false} />*/}
          {/*</Carousel>*/}
        </div>
        <div className="map">
          <GoogleMap mapRef={mapRef} mapsRef={mapsRef} />
        </div>
      </Grid.Column>
      <Grid.Column mobile={16} computer={10} className="right">
        <h2>Header</h2>
        <Card className="card-description">
          <Card.Content>
            <Card.Description>
              <div className="info-wrap">
                <span>Contact - 123412342134</span>
              </div>
              <div className="info-wrap">
                <span>Contact - 123412342134</span>
              </div>
              <div className="info-wrap">
                <span>Contact - 123412342134</span>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card className="card-content">
          <Card.Content>
            <Card.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque
              arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris,
              malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a,
              imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida
              finibus. Vivamus eu semper eros, sit amet porttitor diam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate,
              scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum
              lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non
              pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet
              porttitor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec
              pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu
              mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget
              pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed
              turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero
              vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum
              dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur
              est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet
              porttitor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec
              pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu
              mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget
              pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed
              turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero
              vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum
              dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur
              est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet
              porttitor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec
              pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu
              mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget
              pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed
              turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero
              vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum
              dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur
              est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet
              porttitor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec
              pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu
              mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget
              pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed
              turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero
              vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum
              dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur
              est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet
              porttitor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec
              pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu
              mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget
              pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed
              turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero
              vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum
              dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur
              est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet
              porttitor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec
              pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu
              mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget
              pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed
              turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero
              vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum
              dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur
              est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet
              porttitor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec
              pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu
              mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget
              pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed
              turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero
              vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum
              dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur
              est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet
              porttitor diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec
              pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu
              mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget
              pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed
              turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero
              vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum
              dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur
              est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet
              porttitor diam.
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default ADPage;
