import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import {
  GET_TRANSCRIPTION_LIST,
  UPLOAD_DATA
} from "../../store/transcriptions/actions";
import { ITranscriptionsState } from "../../store/transcriptions/state";
import {
  INavigationComponentProps,
  Navigation,
  NavigationComponent
} from "./navigation-component";

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
  let props: INavigationComponentProps;

  const initialState: ITranscriptionsState = {
    list: undefined,
    loadingList: undefined,
    uploading: undefined
  };

  beforeEach(() => {
    const getTranscriptionList = jest.fn();
    const uploadList = jest.fn();

    props = {
      getTranscriptionList,
      uploadList
    };

    wrapper = shallow(
      <Provider store={store}>
        <Navigation />
      </Provider>
    );

    page = shallow(<NavigationComponent {...props} />);
  });

  // CONNECTED COMPONENT TESTS
  test("Navigation renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("passes list from state", () => {
    expect(wrapper.props().list).toBe(initialState.list);
  });

  test("check ItemList action dispatching ", () => {
    let action;

    store.dispatch(GET_TRANSCRIPTION_LIST({}));
    store.dispatch(UPLOAD_DATA({}));

    action = store.getActions();

    expect(action[0].type).toBe("GET_TRANSCRIPTION_LIST");
    expect(action[1].type).toBe("UPLOAD_DATA");
  });

  // DOM TESTS
  test("should render with upload button disabled", () => {
    expect(page.find(".upload-data").props("disabled"));
  });

  test("calls get list function", () => {
    page.find(".fetch-data").simulate("click");

    expect(props.getTranscriptionList).toHaveBeenCalled();
  });

  test("calls upload function", () => {
    page.setProps({ unlockUpload: true });

    page.find(".upload-data").simulate("click");

    expect(props.uploadList).toHaveBeenCalled();
  });
});
