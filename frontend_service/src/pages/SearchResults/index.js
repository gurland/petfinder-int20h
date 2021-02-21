import React, { useEffect, useState } from 'react';
import './style.scss';

import { useQueryParams } from '../../utils/hooks/use-query-params';
import { ResultCard } from '../../components';
import { searchAds } from '../../utils/api/requests';
import { Loader } from 'semantic-ui-react';

function SearchResults() {
  const query = useQueryParams();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const requestParams = {
      q: query.get('q'),
      longitude: query.get('lng'),
      latitude: query.get('lat'),
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
      {results.map((data) => (
        <ResultCard resultData={data} key={data.id} />
      ))}
    </div>
  );
}

export default SearchResults;
