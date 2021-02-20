import React from 'react';
import './style.scss';

import { ResultCard } from '../../components';

function SearchResults() {
  const RESULT_DATA = [
    {
      id: 1,
      image: '',
      header: 'Lorem ipsum',
      description: 'Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.',
      date: '06 09 2228',
    },
    {
      id: 2,
      image: '',
      header: 'Lorem ipsum',
      description: 'Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.',
      date: '06 09 2228',
    },
    {
      id: 3,
      image: '',
      header: 'Lorem ipsum',
      description: 'Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.',
      date: '06 09 2228',
    },
  ];

  return (
    <div className="main-content">
      <div className="cards-wrap">
        {RESULT_DATA.map((data) => (
          <ResultCard resultData={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;