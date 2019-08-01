/**
 *
 * Toast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Div from './Div';
import I from './I';

function Toast({ toast, hideToast }) {
  return (
    <Div>
      <I onClick={hideToast}>x</I>
      <div>{toast.message}</div>
    </Div>
  );
}

Toast.propTypes = {
  toast: PropTypes.object,
  hideToast: PropTypes.func,
};

export default memo(Toast);
