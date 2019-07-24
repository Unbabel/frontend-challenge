import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const StoreProvider = ({ reducer, initialStore, children }) => (
  <StoreContext.Provider value={useReducer(reducer, initialStore)}>
    {children}
  </StoreContext.Provider>
);

const initialStore = {
  transcriptions: {},
};

const reducer = (store, { type, payload }) => {
  switch (type) {
    case 'fetch':
      return {
        transcriptions: payload.reduce((acc, t) => (acc[t.id] = t), {}),
      };

    case 'update':
      return {
        transcriptions: {
          ...store.transcriptions,
          [payload.id]: {
            ...action.payload,
          },
        },
      };

    default:
      return store;
  }
};

const withStore = Component => () => (
  <StoreProvider initialStore={initialStore} reducer={reducer}>
    <Component />
  </StoreProvider>
);

const useStore = () => useContext(StoreContext);

export { withStore, useStore };
export default null;
