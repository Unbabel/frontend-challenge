import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { ITranscription } from "ts/types/types";
import fetchIcon from "../../../../public/icons/images/fetch-document.svg";
import uploadIcon from "../../../../public/icons/images/upload.svg";
import { IAppState } from "../../store/store";
import {
  GET_TRANSCRIPTION_LIST,
  UPLOAD_DATA
} from "../../store/transcriptions/actions";
import { SvgIcon } from "../svg-icon/svg-icon";
import "./navigation-component.scss";

export interface INavigationComponentProps {
  transcriptionList?: ITranscription[];
  unlockUpload?: boolean;
  getTranscriptionList?: () => void;
  uploadList?: () => void;
}

export class NavigationComponent extends React.Component<
  INavigationComponentProps
> {
  constructor(props: INavigationComponentProps) {
    super(props);
  }

  render() {
    const { getTranscriptionList, unlockUpload, uploadList } = this.props;

    return (
      <nav className="navigation">
        <div className="navigation--wrapper">
          <h2 className="navigation--app-title">Transcription</h2>
          <ul className="navigation--buttons">
            <li>
              <button
                className="navigation--buttons--button"
                disabled={unlockUpload}
                onClick={() => {
                  uploadList();
                }}
              >
                <SvgIcon svg={uploadIcon} />
              </button>
            </li>
            <li>
              <button onClick={() => getTranscriptionList()}>
                <SvgIcon svg={fetchIcon} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export const Navigation = connect(
  (
    state: IAppState,
    ownProps: INavigationComponentProps
  ): Partial<INavigationComponentProps> => {
    const unlockUpload =
      state.transcriptionsState.list === undefined ||
      state.transcriptionsState.list.length === 0;

    const transcriptionList = state.transcriptionsState.list || [];
    return {
      transcriptionList,
      unlockUpload
    };
  },
  (dispatch: Dispatch, ownProps: INavigationComponentProps) => ({
    getTranscriptionList: () => {
      dispatch(GET_TRANSCRIPTION_LIST());
    },
    uploadList: () => {
      dispatch(UPLOAD_DATA());
    }
  })
)(NavigationComponent);
