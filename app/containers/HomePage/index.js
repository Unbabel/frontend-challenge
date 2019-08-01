/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useContext, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ThemeContext } from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectState, makeSelectError, makeSelectTranscriptions } from 'containers/App/selectors';
import { STATE } from 'containers/App/constants';

import Container from 'components/Container';

import Header from 'components/Header';
import TranscriptionList from 'components/TranscriptionList';

import saga from './saga';

import Main from './Main';

const key = 'home';

export function HomePage({ state, error, transcriptions }) {
  useInjectSaga({ key, saga });

  const [draftList, setDraftList] = useState(transcriptions);

  useEffect(() => {
    setDraftList(transcriptions);
  }, [transcriptions]);

  const listProps = {
    state,
    error,
    transcriptions: draftList,
  };

  return (
    <Main theme={useContext(ThemeContext)}>
      <Helmet>
        <title>Transcriptions</title>
      </Helmet>
      <Header />
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
};

const mapStateToProps = createStructuredSelector({
  transcriptions: makeSelectTranscriptions(),
  state: makeSelectState(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
