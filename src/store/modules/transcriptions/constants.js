const NAMESPACE = "TRANSCRIPTIONS_";

const getType = type => {
  return `${NAMESPACE}${type}`;
};

export const STATUS = {
  INITIAL: "initial",
  ERROR: "error",
  LOADING: "loading",
  LOADED: "loaded",
  SAVING: "saving",
  SAVED: "saved"
};

export const ACTIONS = {
  LOAD: getType("LOAD"),
  SAVE: getType("SAVE"),
  ADD: getType("ADD"),
  DELETE: getType("DELETE"),
  UPDATE: getType("UPDATE")
};

export const MUTATIONS = {
  ADD: getType("ADD"),
  UPDATE: getType("UPDATE"),
  DELETE: getType("DELETE"),
  LOAD: getType("LOAD"),
  LOADING_SUCCESS: getType("LOADING_SUCCESS"),
  LOADING_ERROR: getType("LOADING_ERROR"),
  SAVE: getType("SAVE"),
  SAVING_SUCCESS: getType("SAVING_SUCCESS"),
  SAVING_ERROR: getType("SAVING_ERROR")
};

export const ERRORS = {
  LOADING: "loading",
  SAVING: "saving"
};
