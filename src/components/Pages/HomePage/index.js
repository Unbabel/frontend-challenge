import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Modal from "../../Molecules/Modal/";
import Header from "../../Organisms/Header/";
import TranscriptionList from "../../Organisms/TranscriptionList/";
import PageTemplate from "../../Templates/PageTemplate/";

import {
  requestTranscriptionData,
  postTranscriptionData,
  addElementTranscriptionData,
  updateElementTranscriptionData,
  removeElementTranscriptionData
} from "../../../redux/actions";

class HomePage extends Component {
  state = {
    showModal: false
  };
  componentDidMount() {
    const {
      requestTranscriptionData,
      addElementTranscriptionData
    } = this.props;

    requestTranscriptionData();
  }
  handleAddElement = (e, data) => {
    const { addElementTranscriptionData } = this.props;
    const dataToSend = {
      id: Math.random(),
      voice: "voice 22",
      text: "New element in transcription list"
    };
    addElementTranscriptionData(dataToSend);
  };

  handleAddRow = () => {
    const { addElementTranscriptionData } = this.props;
    const dataToSend = {
      id: Math.random(),
      voice: "New Element Title",
      text: "New Element Content"
    };
    addElementTranscriptionData(dataToSend);
  };

  handleDeleteElement = id => {
    const { removeElementTranscriptionData } = this.props;
    removeElementTranscriptionData(id);
  };

  handleUpdateElement = (id, element, content) => {
    const { updateElementTranscriptionData } = this.props;
    const dataElement = {
      id,
      element,
      content
    };
    updateElementTranscriptionData(dataElement);
  };

  handlePostTranscriptions = transcriptionList => {
    const { postTranscriptionData } = this.props;
    postTranscriptionData(transcriptionList);
  };

  componentDidCatch(err) {
    // console.log("ERROR IN CATCH")
    // console.log(err);
  }

  render() {
    const {
      transcriptions,
      requestTranscriptionData,
      postTranscriptionData,
      error,
      isLoading
    } = this.props;


    return (
      <PageTemplate
        header={
          <Header
            requestDataAction={requestTranscriptionData}
            postDataAction={() => {
              this.handlePostTranscriptions(transcriptions);
            }}
          />
        }
        footer={null}
      >
        {/* <Modal
          onClose={() => {
            ;
          }}
          title="Hello"
          closeable
          isOpen={this.state.showModal}
        >
          {error}
        </Modal> */}

        <TranscriptionList
          isLoading={isLoading}
          items={transcriptions}
          handleDeleteElement={this.handleDeleteElement}
          handleAddRow={this.handleAddRow}
          handleUpdateElement={this.handleUpdateElement}
        />
      </PageTemplate>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.transcription.isLoading,
  error: state.transcription.error,
  transcriptions: state.transcription.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestTranscriptionData,
      postTranscriptionData,
      addElementTranscriptionData,
      updateElementTranscriptionData,
      removeElementTranscriptionData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
