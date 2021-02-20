import React, { createContext, useReducer } from 'react';
import actions from './actions';

const initialStore = {};
export const store = createContext(initialStore);

// eslint-disable-next-line react/prop-types
function StoreProvider({ children }) {
  const { Provider } = store;
  const [state, dispatch] = useReducer((state, action) => {}, initialStore);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export default StoreProvider;
