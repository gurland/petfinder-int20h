import React from 'react';
import './style.scss';
import { Grid, Card, Button } from 'semantic-ui-react';

function ADPage() {
  return (
    <Grid centered className="details-page__grid">
      <Grid.Column mobile={16} computer={6}>
        <div className="images-wrap">
          <img className="pet-image" src='./img/not-found.jpg' wrapped ui={false} />
          <img className="pet-image" src='./img/not-found.jpg' wrapped ui={false} />
        </div>
      </Grid.Column>
      <Grid.Column mobile={16} computer={10}>
        <h2>Header</h2>
        <h3>Color - red</h3>
        <Card>
          <Card.Content>
            <Card.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit justo, nec pellentesque arcu. Morbi pharetra libero vulputate, scelerisque odio id, bibendum ligula. Aliquam arcu mauris, malesuada vitae urna non, vestibulum dictum lectus. Phasellus sapien ex, tincidunt eget pellentesque a, imperdiet in metus. Morbi consectetur est non pretium placerat. Duis sit amet nulla sed turpis gravida finibus. Vivamus eu semper eros, sit amet porttitor diam.
            </Card.Description>
          </Card.Content>
        </Card>

        <div className="bottom-btn-wrap">
          <Button positive>Contact</Button>
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default ADPage;
