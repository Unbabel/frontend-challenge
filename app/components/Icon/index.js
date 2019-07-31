import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Svg from './Svg';

function Icon({ name }) {
  return <Svg theme={useContext(ThemeContext)}>{name}</Svg>;
}

export default Icon;
