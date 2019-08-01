/**
 *
 * TextInput
 *
 */

import React, { useEffect, useState, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Div from './Div';
import Input from './Input';

function TextInput({ id, label, value, updateTitle }) {
  const [title, setTitle] = useState(value);

  useEffect(() => {
    updateTitle(title);
  }, [title]);

  const placeholder = <FormattedMessage {...messages.inputPlaholder} />;
  return (
    <Div theme={useContext(ThemeContext)}>
      <label className="hidden" htmlFor={`${id}`}>
        {!!label && label}
      </label>
      <Input onChange={e => setTitle(e.target.value)} id={id} type="text" placeholder={placeholder} value={value} />
    </Div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  updateTitle: PropTypes.func,
};

export default memo(TextInput);
