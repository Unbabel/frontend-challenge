/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function Container(props) {
  debugger;
  return (
    <Wrapper gutter={props.gutter} theme={useContext(ThemeContext)}>
      {Children.toArray(props.children)}
    </Wrapper>
  );
}

Container.propTypes = {
  gutter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  gutter: false,
};

export default Container;
