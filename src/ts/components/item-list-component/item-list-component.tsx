import { Inplace, InplaceContent, InplaceDisplay } from "primereact/inplace";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { ITranscription } from "ts/types/types";
import addRow from "../../../../public/icons/images/add-row.svg";
import deleteIcon from "../../../../public/icons/images/delete.svg";
import personIcon from "../../../../public/icons/images/person.svg";
import { IAppState } from "../../store/store";
import { ADD_NEW_ROW, ON_ROW_EDIT } from "../../store/transcriptions/actions";
import { arrayIsValid } from "../../utils/object-utils/object-utils";
import { uuidv4 } from "../../utils/utils";
import { SvgIcon } from "../svg-icon/svg-icon";
import "./item-list-component.scss";

export interface IItemListComponentProps {
  transcriptionList?: ITranscription[];
  onNewRowAdd?: (newRow: ITranscription) => void;
  onRowEdition?: (field: string, newValue: string, rowId: string) => void;
  onDeleteRow?: (trancription: ITranscription) => void;
}

export interface IItemListComponentState {
  transcriptionList: ITranscription[];
  showAddRowWarning: boolean;
}

export class ItemListComponent extends React.Component<
  IItemListComponentProps,
  IItemListComponentState
> {
  constructor(props: IItemListComponentProps) {
    super(props);

    this.state = {
      showAddRowWarning: false,
      transcriptionList: this.props.transcriptionList
    };

    this.addNewRow = this.addNewRow.bind(this);
    this.onRowEdit = this.onRowEdit.bind(this);
  }

  componentDidUpdate(prevProps: IItemListComponentProps) {
    if (this.props.transcriptionList !== prevProps.transcriptionList) {
      this.setState({
        ...this.state,
        transcriptionList: this.props.transcriptionList
      });
    }
  }

  private deleteRow(rowToDelete: ITranscription) {
    const transcriptionList = this.state.transcriptionList;
    const rowToDeleteIndex = transcriptionList.indexOf(rowToDelete);

    if (rowToDeleteIndex > -1) {
      transcriptionList.splice(rowToDeleteIndex, 1);

      this.setState({
        ...this.state,
        transcriptionList
      });
    }
  }

  private addNewRow() {
    const { transcriptionList } = this.state;

    if (arrayIsValid(transcriptionList)) {
      this.setState({ ...this.state, showAddRowWarning: true });

      setTimeout(
        () => this.setState({ ...this.state, showAddRowWarning: false }),
        3000
      );

      return;
    }

    const { onNewRowAdd } = this.props;
    const newTranscritpion: ITranscription = {
      id: uuidv4(),
      text: "",
      voice: ""
    };

    onNewRowAdd(newTranscritpion);
  }

  private onRowEdit(e: any, rowId: string) {
    e.persist();

    const transcriptionListClone = [...this.state.transcriptionList];
    const rowToEdit = transcriptionListClone.find(
      transcription => transcription.id === rowId
    );

    rowToEdit[e.target.id] = e.target.value;

    return this.setState({
      ...this.state,
      transcriptionList: transcriptionListClone
    });
  }

  render() {
    const { transcriptionList, showAddRowWarning } = this.state;

    return (
      <div className="item-list-container">
        <ul className="item-list">
          {transcriptionList.map(transcription => (
            <li key={transcription.id} className="item-list--item">
              <div className="delete-icon">
                <button onClick={() => this.deleteRow(transcription)}>
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
                  <div className="inplace-editor">
                    <Inplace closable={true} className="inplace-editor--title">
                      <InplaceDisplay>
                        {transcription.voice
                          ? transcription.voice
                          : "Transcription Name"}
                      </InplaceDisplay>
                      <InplaceContent>
                        <InputText
                          id="voice"
                          autoFocus
                          value={transcription.voice}
                          onChange={e => this.onRowEdit(e, transcription.id)}
                        />
                      </InplaceContent>
                    </Inplace>
                  </div>
                </div>
                <div className="inplace-editor">
                  <Inplace closable={true} className="inplace-editor--text">
                    <InplaceDisplay>
                      {transcription.text
                        ? transcription.text
                        : "Describe your transcription"}
                    </InplaceDisplay>
                    <InplaceContent>
                      <InputTextarea
                        id="text"
                        value={transcription.text}
                        autoFocus
                        onChange={e => {
                          this.onRowEdit(e, transcription.id);
                        }}
                      />
                    </InplaceContent>
                  </Inplace>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="add-row">
          <button
            onClick={() => this.addNewRow()}
          >
            <SvgIcon svg={addRow} />
          </button>
          {showAddRowWarning && (
            <h3 className="warning-message">
              Please fill the already created transcription
            </h3>
          )}
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
  (dispatch: Dispatch, ownProps: IItemListComponentProps) => ({
    onNewRowAdd: (newRow: ITranscription) => {
      dispatch(ADD_NEW_ROW({ newRow }));
    },
    onRowEdition: (field: string, newValue: string, rowId: string) => {
      dispatch(ON_ROW_EDIT({ field, newValue, rowId }));
    }
  })
)(ItemListComponent);
