import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { IAppState } from "../../store/store";
import "./navigation-component.scss";

export interface INavigationComponentProps {}

export class NavigationComponent extends React.Component<
  INavigationComponentProps
> {
  constructor(props: INavigationComponentProps) {
    super(props);
  }

  render() {
    return (
      <nav className="navigation">
        <h2 className="navigation--app-title">Transcription</h2>
        <ul className="navigation--buttons">
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export const Navigation = connect(
  (
    state: IAppState,
    ownProps: INavigationComponentProps
  ): Partial<INavigationComponentProps> => {
    return {};
  },
  (dispatch: Dispatch, ownProps: INavigationComponentProps) => ({})
)(NavigationComponent);
