export type ListItem = {
  id: number;
  voice: string;
  text: string;
};

export type List = ListItem[];

export type State = {
  fetched: boolean;
  fetching: boolean;
  list: List;
};

export type ApiDataResult = List;

export type UpdateParams = {
  id: number;
  value: string;
  type: string;
};
