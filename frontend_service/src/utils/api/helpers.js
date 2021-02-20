import axios from 'axios';

const createApiLink = (endpoint) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  return `${apiUrl}${endpoint}`;
};

export const sendRequest = async ({ method, endpoint, data = {}, headers = {} }) => {
  const url = createApiLink(endpoint);
  const requestParams = {
    method,
    url,
    headers,
  };

  if (method.toLowerCase() === 'get') {
    requestParams.params = data;
  } else {
    requestParams.data = data;
  }

  try {
    const result = await axios(requestParams);
    return { data: result.data, status: result.status };
  } catch (e) {
    return e.response || {};
  }
};
