/**
 *
 * Toasts
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Toast from 'components/Toast';

import makeSelectToasts from './selectors';
import { hideToast } from './actions';
import messages from './messages';

import Div from './Div';

export function Toasts({ toasts, hideItem }) {
  return (
    <Div>
      {toasts.map((toast, index) => (
        <Toast hideItem={() => hideItem(toast)} toast={toast} key={`toast-${index}`} />
      ))}
    </Div>
  );
}

Toasts.propTypes = {
  toasts: PropTypes.array,
  hideItem: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  toasts: makeSelectToasts(),
});

function mapDispatchToProps(dispatch) {
  return {
    hideItem: toast => dispatch(hideToast(toast)),
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
