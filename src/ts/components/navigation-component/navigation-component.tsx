import * as React from "react";
import { connect, Dispatch } from "react-redux";
import fetchIcon from "../../../../public/icons/images/fetch-document.svg";
import uploadIcon from "../../../../public/icons/images/upload.svg";
import { IAppState } from "../../store/store";
import {
  GET_TRANSCRIPTION_LIST,
  UPLOAD_DATA
} from "../../store/transcriptions/actions";
import { arrayIsValid } from "../../utils/array-utils/array-utils";
import { SvgIcon } from "../svg-icon/svg-icon";
import "./navigation-component.scss";

export interface INavigationComponentProps {
  loading?: boolean;
  unlockUpload?: boolean;
  uploading?: boolean;
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
    const {
      unlockUpload,
      uploadList,
      getTranscriptionList,
      loading,
      uploading
    } = this.props;

    return (
      <nav className="navigation">
        <div className="navigation--wrapper">
          <h2 className="navigation--app-title">Transcription</h2>
          <ul className="navigation--buttons">
            <li>
              {uploading ? (
                <i className="loading pi pi-spin pi-spinner" />
              ) : (
                <button
                  className="upload-data navigation--buttons--button"
                  disabled={unlockUpload}
                  onClick={() => {
                    uploadList();
                  }}
                >
                  <SvgIcon svg={uploadIcon} />
                </button>
              )}
            </li>
            <li>
              {loading ? (
                <i className="loading pi pi-spin pi-spinner" />
              ) : (
                <button className="fetch-data" onClick={() => getTranscriptionList()}>
                  <SvgIcon svg={fetchIcon} />
                </button>
              )}
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
    const transcriptionList = state.transcriptionsState.list || [];
    const unlockUpload =
      state.transcriptionsState.list === undefined ||
      state.transcriptionsState.list.length === 0 ||
      arrayIsValid(transcriptionList);
    const loading = state.transcriptionsState.loadingList;
    const uploading = state.transcriptionsState.uploading;

    return {
      loading,
      unlockUpload,
      uploading
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
