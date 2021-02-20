import React from 'react';
import './style.scss';

import { Card, Image } from 'semantic-ui-react';

function SearchResults() {
  return (
    <div className="main-content">
      <div className="cards-wrap">
        <Card>
          <Image src='./img/not-found.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header className="retail-name">Lorem ipsum</Card.Header>
            <Card.Description> Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.</Card.Description>
          </Card.Content>
          <Card.Content extra>06 09 2228</Card.Content>
        </Card>
        <Card>
          <Image src='./img/not-found.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header className="retail-name">Lorem ipsum</Card.Header>
            <Card.Description> Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.</Card.Description>
          </Card.Content>
          <Card.Content extra>06 09 2228</Card.Content>
        </Card>
        <Card>
          <Image src='./img/not-found.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header className="retail-name">Lorem ipsum</Card.Header>
            <Card.Description> Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.</Card.Description>
          </Card.Content>
          <Card.Content extra>06 09 2228</Card.Content>
        </Card>
        <Card>
          <Image src='./img/not-found.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header className="retail-name">Lorem ipsum</Card.Header>
            <Card.Description> Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.</Card.Description>
          </Card.Content>
          <Card.Content extra>06 09 2228</Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default SearchResults;
