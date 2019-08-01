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
            height={height}
            onBlur={() => setActive(!isActive)}
            id={`ta-${props.id}`}
            type="text"
            placeholder={placeholder}
            value={props.value}
          />
        </div>
      ) : (
        <P id={`p-${props.id}`} onClick={acivateTextArea}>
          {props.value}
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
