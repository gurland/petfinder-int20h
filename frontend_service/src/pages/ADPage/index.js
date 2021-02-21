import React from 'react';
import './style.scss';
import { Grid, Card, Button } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ADPage() {
  return (
    <Grid centered className="advertisement-grid">
      <Grid.Column mobile={16} computer={6} className="left">
        <img className="pet-image" src='./img/not-found.jpg' wrapped ui={false} />
        {/* <div className="images-wrap">
          <Carousel>
            <img className="pet-image" src='./img/not-found.jpg' wrapped ui={false} />
            <img className="pet-image" src='./img/not-found.jpg' wrapped ui={false} />
            <img className="pet-image" src='./img/not-found.jpg' wrapped ui={false} />
          </Carousel>
        </div> */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default ADPage;
