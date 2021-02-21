import React, { createContext, useReducer } from 'react';
import actions from './actions';

const initialStore = {
  currentPage: '',
  authorized: false,
};
export const store = createContext(initialStore);

// eslint-disable-next-line react/prop-types
function StoreProvider({ children }) {
  const { Provider } = store;
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actions.SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        };
      case actions.SET_AUTHORIZED:
        return {
          ...state,
          authorized: action.payload,
        };
      default:
        return state;
    }
  }, initialStore);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export default StoreProvider;
