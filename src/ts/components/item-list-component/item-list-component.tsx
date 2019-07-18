import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { ITranscription } from "ts/types/types";
import addRow from "../../../../public/icons/images/add-row.svg";
import deleteIcon from "../../../../public/icons/images/delete.svg";
import personIcon from "../../../../public/icons/images/person.svg";
import { IAppState } from "../../store/store";
import { SvgIcon } from "../svg-icon/svg-icon";
import "./item-list-component.scss";

export interface IItemListComponentProps {
  transcriptionList?: ITranscription[];
}

export class ItemListComponent extends React.Component<
  IItemListComponentProps
> {
  constructor(props: IItemListComponentProps) {
    super(props);
  }

  render() {
    const { transcriptionList } = this.props;
    return (
      <div className="item-list-container">
        <ul className="item-list">
          {transcriptionList.map(transcription => (
            <li key={transcription.id} className="item-list--item">
              <div className="delete-icon">
                <button>
                  <SvgIcon className="person-icon" svg={deleteIcon} />
                </button>
              </div>
              <div>
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <figure>
                  <SvgIcon className="person-icon" svg={personIcon} />
                </figure>
              </div>
              <div className="item-info">
                <div className="inplace-editor">
                  <label
                    className="visually-hidden"
                    htmlFor="transcription-voice"
                  >
                    Change the title of {transcription.voice}
                  </label>
                  <input
                    type="text"
                    value={transcription.voice}
                    onChange={e => ""}
                  />
                </div>
                <div className="inplace-editor">
                  <div
                    className="long-text"
                    suppressContentEditableWarning={true}
                    contentEditable
                  >
                    {transcription.text}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="add-row">
          <button>
            <SvgIcon svg={addRow} />
          </button>
        </div>
      </div>
    );
  }
}

export const ItemList = connect(
  (
    state: IAppState,
    ownProps: IItemListComponentProps
  ): Partial<IItemListComponentProps> => {
    const transcriptionList = state.transcriptionsState.list || [];
    return {
      transcriptionList
    };
  },
  (dispatch: Dispatch, ownProps: IItemListComponentProps) => ({})
)(ItemListComponent);
