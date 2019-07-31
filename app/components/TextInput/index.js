/**
 *
 * TextInput
 *
 */

import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Div from './Div';

function TextInput(props) {
  const placeholder = <FormattedMessage {...messages.inputPlaholder} />;
  return (
    <Div theme={useContext(ThemeContext)}>
      <label className="hidden" htmlFor={`${props.id}`}>
        {!!props.label && props.label}
      </label>
      <input id={props.id} type="text" placeholder={placeholder} value={props.value} />
    </Div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default memo(TextInput);
