import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  requestTranscriptionData,
  postTranscriptionData,
  addElementTranscriptionData,
  updateElementTranscriptionData,
  removeElementTranscriptionData
} from "../../../redux/actions";

class HomePage extends Component {
  componentDidMount() {
    const {
      requestTranscriptionData,
      addElementTranscriptionData,
    } = this.props;

    // requestTranscriptionData()
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.transcription.isLoading,
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
