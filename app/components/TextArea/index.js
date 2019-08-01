/**
 *
 * TextArea
 *
 */

import React, { useEffect, useState, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { injectIntl, intlShape } from 'react-intl';

import messages from './messages';

import Div from './Div';
import TArea from './TextArea';
import P from './P';

function TextArea({ intl, id, label, value, updateText }) {
  const [text, setText] = useState(value);
  const [isActive, setActive] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    updateText(text);
  }, [text]);

  function acivateTextArea() {
    const paragraph = document.getElementById(`p-${id}`);
    const pHeight = paragraph.offsetHeight;
    setHeight(pHeight);
    setActive(!isActive);
  }

  return (
    <Div theme={useContext(ThemeContext)}>
      {isActive ? (
        <div>
          <label className="hidden" htmlFor={id}>
            {!!label && label}
          </label>
          <TArea
            onBlur={() => setActive(!isActive)}
            onChange={e => setText(e.target.value)}
            height={height}
            id={`ta-${id}`}
            type="text"
            placeholder={intl.formatMessage(messages.placeholder)}
            value={text}
          />
        </div>
      ) : (
        <P id={`p-${id}`} onClick={acivateTextArea}>
          {text.length > 0 ? text : intl.formatMessage(messages.placeholder)}
        </P>
      )}
    </Div>
  );
}

TextArea.propTypes = {
  intl: intlShape,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  updateText: PropTypes.func,
};

export default memo(injectIntl(TextArea));
