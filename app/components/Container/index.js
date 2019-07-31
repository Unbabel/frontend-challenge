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

import Section from './Section';

function Container(props) {
  return (
    <Section theme={useContext(ThemeContext)}>
      {Children.toArray(props.children)}
    </Section>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
