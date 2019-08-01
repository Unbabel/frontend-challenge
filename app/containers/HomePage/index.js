/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ThemeContext } from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { makeSelectState, makeSelectError, makeSelectTranscriptions } from 'containers/App/selectors';
import { STATE } from 'containers/App/constants';

import Header from 'containers/Header';
import Container from 'components/Container';
import TranscriptionList from 'containers/TranscriptionList';

import Main from './Main';

export function HomePage() {
  return (
    <Main theme={useContext(ThemeContext)}>
      <Helmet>
        <title>Transcriptions</title>
      </Helmet>
      <Header />
      <Container>
        <TranscriptionList />
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
