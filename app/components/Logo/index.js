import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import H1 from './H1';

function Logo() {
  return <H1 theme={useContext(ThemeContext)}>Transcriptions</H1>;
}

export default Logo;
