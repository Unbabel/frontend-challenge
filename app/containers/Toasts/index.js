/**
 *
 * Toasts
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectToasts from './selectors';
import { hideToast } from './actions';

const mapStateToProps = createStructuredSelector({
  toasts: makeSelectToasts(),
});

function mapDispatchToProps(dispatch) {
  return {
    hideToast: toast => dispatch(hideToast(toast)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Toasts);
