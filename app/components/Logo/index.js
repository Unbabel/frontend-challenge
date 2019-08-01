import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import H1 from './H1';

function Logo() {
  return (
    <H1 theme={useContext(ThemeContext)}>
      <span>T</span>
      <span>r</span>
      <span>a</span>
      <span>n</span>
      <span>s</span>
      <span>c</span>
      <span>r</span>
      <span>i</span>
      <span>p</span>
      <span>t</span>
      <span>i</span>
      <span>o</span>
      <span>n</span>
      <span>s</span>
    </H1>
  );
}

export default Logo;
