/**
 *
 * TextInput
 *
 */

import React, { useEffect, useState, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { injectIntl, intlShape } from 'react-intl';

import messages from './messages';

import Div from './Div';
import Input from './Input';

function TextInput({ intl, id, label, value, updateTitle }) {
  const [title, setTitle] = useState(value);

  useEffect(() => {
    updateTitle(title);
  }, [title]);

  return (
    <Div theme={useContext(ThemeContext)}>
      <label className="hidden" htmlFor={`${id}`}>
        {!!label && label}
      </label>
      <Input
        onBlur={() => updateTitle(title)}
        onChange={e => setTitle(e.target.value)}
        id={id}
        type="text"
        placeholder={intl.formatMessage(messages.placeholder)}
        value={title}
      />
    </Div>
  );
}

TextInput.propTypes = {
  intl: intlShape,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  updateTitle: PropTypes.func,
};

export default memo(injectIntl(TextInput));
