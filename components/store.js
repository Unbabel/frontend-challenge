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
        transcriptions: payload.reduce((acc, t) => ((acc[t.id] = t), acc), {}),
      };

    case 'create':
      // I could get the last item from the array, but this is safer
      const nextId =
        Object.keys(store.transcriptions).reduce((acc, cur) =>
          Math.max(acc, cur)
        ) + 1;
      return {
        transcriptions: {
          ...store.transcriptions,
          [nextId]: {
            id: nextId,
            voice: '',
            text: '',
          },
        },
      };

    case 'update':
      return {
        transcriptions: {
          ...store.transcriptions,
          [payload.id]: {
            ...store.transcriptions[payload.id],
            ...payload,
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
