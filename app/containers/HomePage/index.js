/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectState, makeSelectError, makeSelectTranscriptions } from 'containers/App/selectors';
import { loadTranscriptions } from 'containers/App/actions';
import { STATE } from 'containers/App/constants';

// import messages from './messages';

import TranscriptionListItem from 'containers/TranscriptionListItem';

import TranscriptionList from 'components/TranscriptionList';
import saga from './saga';

const key = 'home';

export function HomePage({ state, error, transcriptions, loadData }) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (state === STATE.initial) loadData();
  }, []);

  const listProps = {
    state,
    error,
    transcriptions,
  };

  return (
    <main>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React.js Boilerplate application homepage" />
      </Helmet>
      <TranscriptionList {...listProps} />
    </main>
  );
}

HomePage.propTypes = {
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
