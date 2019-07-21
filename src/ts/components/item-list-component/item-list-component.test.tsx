import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import {
  ADD_NEW_ROW,
  DELETE_DATA,
  ON_ROW_EDIT
} from "../../store/transcriptions/actions";
import { ITranscriptionsState } from "../../store/transcriptions/state";
import { ITranscription } from "../../types/types";
import { uuidv4 } from "../../utils/utils";
import {
  IItemListComponentProps,
  ItemList,
  ItemListComponent
} from "./item-list-component";

configure({ adapter: new Adapter() });

describe("ItemList Snapshot and functionality test", () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    transcriptionsState: {
      list: []
    }
  });
  let wrapper: any;
  let page: any;
  let newTranscritpion: ITranscription;
  let instance: any;

  const initialState: ITranscriptionsState = {
    list: undefined,
    loadingList: undefined,
    uploading: undefined
  };

  beforeEach(() => {
    const onNewRowAdd = jest.fn();
    const onTranscriptionDelete = jest.fn();

    const props: IItemListComponentProps = {
      onNewRowAdd,
      onTranscriptionDelete,
      transcriptionList: []
    };

    wrapper = shallow(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );

    page = shallow(<ItemListComponent {...props} />);

    instance = page.instance();

    newTranscritpion = {
      id: uuidv4(),
      text: "",
      voice: ""
    };
  });

  // CONNECTED COMPONENT TESTS
  test("ItemList renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("passes list from state", () => {
    expect(wrapper.props().list).toBe(initialState.list);
  });

  test("check ItemList action dispatching ", () => {
    let action;

    store.dispatch(ADD_NEW_ROW({ newRow: newTranscritpion }));
    store.dispatch(
      ON_ROW_EDIT({ field: "text", newValue: "test value", rowId: "1" })
    );

    store.dispatch(DELETE_DATA({ transcription: newTranscritpion }));

    action = store.getActions();

    expect(action[0].type).toBe("ADD_NEW_ROW");
    expect(action[1].type).toBe("ON_ROW_EDIT");
    expect(action[2].type).toBe("DELETE_DATA");
  });

  // DOM TESTS
  test("component renders correctly with no rows", () => {
    page.setProps({ transcriptionList: [] });

    expect(page.find("li")).toHaveLength(0);
    expect(page.state("transcriptionList")).toHaveLength(0);
  });

  test("add button click", () => {
    jest.spyOn(instance, "addNewRow");

    page.find("button").simulate("click");

    expect(instance.addNewRow).toHaveBeenCalled();
  });

  test("component renders correctly with 1 row", () => {
    page.setProps({ transcriptionList: [newTranscritpion] });

    expect(page.find("li")).toHaveLength(1);
    expect(page.state("transcriptionList")).toHaveLength(1);
  });
});
