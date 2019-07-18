import { History, Location } from "history";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
import { ItemList } from "../../components/item-list-component/item-list-component";
import { Navigation } from "../../components/navigation-component/navigation-component";
import { IAppState } from "../../store/store";
import { GET_TRANSCRIPTION_LIST } from "../../store/transcriptions/actions";
import { ITranscription } from "../../types/types";

export interface IDashboardComponentProps extends RouteComponentProps<{}> {
  history: History;
  location: Location;
  transcriptionList: ITranscription[];
  getTranscriptionList: () => void;
}

export class DashboardComponent extends React.Component<
  IDashboardComponentProps
> {
  constructor(props: IDashboardComponentProps) {
    super(props);
  }

  render() {
    const { getTranscriptionList } = this.props;
    return (
      <>
        <header>
          <Navigation />
        </header>
        <main>
          <ItemList />
        </main>
        <footer>
          <button onClick={() => getTranscriptionList()}>+</button>
        </footer>
      </>
    );
  }
}

export const DashboardPage = connect(
  (
    state: IAppState,
    ownProps: IDashboardComponentProps
  ): Partial<IDashboardComponentProps> => {
    return {};
  },
  (dispatch: Dispatch, ownProps: IDashboardComponentProps) => ({
    getTranscriptionList: () => {
      dispatch(GET_TRANSCRIPTION_LIST());
    }
  })
)(DashboardComponent);
