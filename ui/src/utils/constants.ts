export const CONSTANTS = {
  API: {
    GET_LIST: "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c",
    POST_LIST: "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c",
  },
  ROUTES: {
    HOME: {
      PATH: "/",
      NAME: "home",
    },
    NOT_FOUND: {
      PATH: "/not-found",
      NAME: "notFound",
    },
    WILDCARD: "/:pathMatch(.*)*",
  },
  STORE: {
    ACTIONS: {
      FETCH_DATA: "FETCH_DATA",
      SEND_DATA: "SEND_DATA",
      SAVE_DATA: "SAVE_DATA",
      REMOVE_ITEM: "REMOVE_ITEM",
      UPDATE_ITEM: "UPDATE_ITEM",
    },
    MUTATIONS: {
      FETCHING_DATA: "FETCHING_DATA",
      SET_DATA: "SET_FETCHED_DATA",
      UPDATE_DATA: "UPDATE_DATA",
      DELETE_ITEM: "DELETE_ITEM",
    },
  },
  COMMON: {},
};
