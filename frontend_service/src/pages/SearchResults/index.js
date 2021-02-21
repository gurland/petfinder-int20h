import React, { useEffect, useState } from 'react';
import './style.scss';

import { useQueryParams } from '../../utils/hooks/use-query-params';
import { ResultCard } from '../../components';
import { searchAds } from '../../utils/api/requests';
import { Loader } from 'semantic-ui-react';

function SearchResults() {
  const query = useQueryParams();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const requestParams = {
      text: query.get('text'),
      longitude: query.get('longitude'),
      latitude: query.get('latitude'),
      radius: query.get('radius'),
    };

    (async () => {
      setLoading(true);
      const { data, status } = await searchAds(requestParams);
      if (status === 200) {
        setResults(data);
      }
      setLoading(false);
    })();
  }, []);

  const RESULT_DATA = [
    {
      id: 1,
      image: '',
      header: 'Lorem ipsum',
      description:
        'Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.',
      date: '06 09 2228',
      type: 'found',
    },
    {
      id: 2,
      image: '',
      header: 'Lorem ipsum',
      description:
        'Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.',
      date: '06 09 2228',
      type: 'lost',
    },
    {
      id: 3,
      image: '',
      header: 'Lorem ipsum',
      description:
        'Mauris eget volutpat ipsum, et sagittis diam. Proin metus sem, eleifend eu neque at, interdum elementum massa. Mauris blandit elit at sagittis facilisis. Vestibulum eu interdum erat. Suspendisse elementum purus porta vestibulum tristique. Quisque lacinia lobortis lorem sit amet auctor. Vivamus ornare tellus sit amet est commodo, nec molestie erat fermentum.',
      date: '06 09 2228',
      type: 'found',
    },
  ];

  return loading ? (
    <div className="app-main" style={{ height: '100%' }}>
      <div className="main-content">
        <Loader active inline="centered" size="massive" inverted>
          Завантаження...
        </Loader>
      </div>
    </div>
  ) : (
    <div className="cards-wrap">
      {RESULT_DATA.map((data) => (
        <ResultCard resultData={data} key={data.id} />
      ))}
    </div>
  );
}

export default SearchResults;
