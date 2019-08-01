import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Label from './Label';
import Input from './Input';
import Span from './Span';

function Checkbox() {
  const [isChecked, setChecked] = useState(false);

  return (
    <Label theme={useContext(ThemeContext)}>
      <Input checked={isChecked} onChange={() => setChecked(!isChecked)} type="checkbox" />
      <Span>
        <span />
      </Span>
    </Label>
  );
}

export default Checkbox;
