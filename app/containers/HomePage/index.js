/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useContext, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ThemeContext } from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectState, makeSelectError, makeSelectTranscriptions } from 'containers/App/selectors';
import { loadTranscriptions } from 'containers/App/actions';
import { STATE } from 'containers/App/constants';

import Container from 'components/Container';

// import messages from './messages';

import TranscriptionList from 'components/TranscriptionList';
import saga from './saga';

import Main from './Main';

const key = 'home';

export function HomePage({ state, error, transcriptions, loadData }) {
  useInjectSaga({ key, saga });

  // useEffect(() => {
  //   if (state === STATE.initial) loadData();
  // }, []);

  const listProps = {
    state,
    error,
    transcriptions,
  };

  return (
    <Main theme={useContext(ThemeContext)}>
      <Helmet>
        <title>Transcriptions</title>
      </Helmet>
      <Container>
        <TranscriptionList {...listProps} />
      </Container>
    </Main>
  );
}

HomePage.propTypes = {
  theme: PropTypes.object,
  state: PropTypes.oneOf(Object.values(STATE)),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  transcriptions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  transcriptions: makeSelectTranscriptions(),
  state: makeSelectState(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadTranscriptions()),
    // loadData: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadTranscriptions());
    // },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
