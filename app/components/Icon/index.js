import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../../../challenge-info', true, /\.svg$/));

import Svg from './Svg';

function Icon({ name }) {
  return <Svg theme={useContext(ThemeContext)}>{name}</Svg>;
}

export default Icon;
