import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Icon from '../../Atoms/icon'
import SvgImage from '../../Atoms/icon/icons/delete.svg'

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

     requestTranscriptionData()
  }

  render() {
    const {transcriptions} = this.props;
    return (
      <div>
        <img src={SvgImage}/>
        <h1>Home Page</h1>
        <Icon icon="person" />
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

