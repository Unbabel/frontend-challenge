import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { ItemList } from "../../components/item-list-component/item-list-component";
import { Navigation } from "../../components/navigation-component/navigation-component";
import { IAppState } from "../../store/store";

export interface IDashboardComponentProps {}

export class DashboardComponent extends React.Component<
  IDashboardComponentProps
> {
  constructor(props: IDashboardComponentProps) {
    super(props);
  }

  render() {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <main>
          <ItemList />
        </main>
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
  (dispatch: Dispatch, ownProps: IDashboardComponentProps) => ({})
)(DashboardComponent);
