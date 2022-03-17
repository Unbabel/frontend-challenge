import { ListItem, State } from "@/store/types";

export const getDefaultState = (): State => ({
  fetched: false,
  fetching: false,
  list: [],
});

export const createNewListItem = (): ListItem => ({
  id: Date.now(),
  text: "",
  voice: "",
});
