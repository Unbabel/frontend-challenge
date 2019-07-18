import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { ITranscription } from "ts/types/types";
import person from "../../../../public/images/person@1x.png";
import { IAppState } from "../../store/store";
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
              <div>
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <figure>
                  <img
                    src={person}
                    className="person-image"
                    alt="person image"
                  />
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
