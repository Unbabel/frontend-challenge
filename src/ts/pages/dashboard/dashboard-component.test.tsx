import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ITranscriptionsState } from "../../store/transcriptions/state";
import { DashboardPage } from "./dashboard-component";

configure({ adapter: new Adapter() });

describe("Dashboard Snapshot and functionality test", () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    transcriptionsState: {
      list: []
    }
  });
  let wrapper: any;

  const initialState: ITranscriptionsState = {
    list: undefined,
    loadingList: undefined,
    uploading: undefined
  };

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <DashboardPage />
      </Provider>
    );
  });

  // CONNECTED COMPONENT TESTS
  test("Dashboard renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("passes list from state", () => {
    expect(wrapper.props().list).toBe(initialState.list);
  });
});
