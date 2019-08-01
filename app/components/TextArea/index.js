/**
 *
 * TextArea
 *
 */

import React, { useState, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Div from './Div';
import TArea from './TextArea';
import P from './P';

function TextArea(props) {
  const [value, setValue] = useState(props.value);
  const [isActive, setActive] = useState(false);
  const [height, setHeight] = useState(0);
  const placeholder = <FormattedMessage {...messages.inputPlaholder} />;

  function acivateTextArea() {
    const paragraph = document.getElementById(`p-${props.id}`);
    const pHeight = paragraph.offsetHeight;
    setHeight(pHeight);
    setActive(!isActive);
  }

  return (
    <Div theme={useContext(ThemeContext)}>
      {isActive ? (
        <div>
          <label className="hidden" htmlFor={props.id}>
            {!!props.label && props.label}
          </label>
          <TArea
            onBlur={() => setActive(!isActive)}
            onChange={e => setValue(e.target.value)}
            height={height}
            id={`ta-${props.id}`}
            type="text"
            placeholder={placeholder}
            value={value}
          />
        </div>
      ) : (
        <P id={`p-${props.id}`} onClick={acivateTextArea}>
          {value}
        </P>
      )}
    </Div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default memo(TextArea);
