import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { COLORS } from '../../theme';

import Div from './Div';
import Svg from './Svg';

function Icon(props) {
  return (
    <Div {...props} theme={useContext(ThemeContext)}>
      <Svg width={`${props.size}px`} height={`${props.size}px`}>
        <use xlinkHref={`#${props.name}`} />
      </Svg>
    </Div>
  );
}

Icon.propTypes = {
  name: PropTypes.oneOf(['add-row', 'avatar', 'fetch-document', 'person', 'upload']).isRequired,
  color: PropTypes.oneOf([COLORS.BLUE, COLORS.GREY_DARK, COLORS.GREY_LIGHT, COLORS.GREY_LIGHTER]),
  size: PropTypes.number,
  viewBox: PropTypes.string,
};

Icon.defaultProps = {
  color: COLORS.GREY_DARK,
  size: 32,
};

export default Icon;
