/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import Div from './Div';
import StyledButton from './StyledButton';

function Button({ href, onClick, children, isDisabled, isFlat }) {
  return (
    <Div>
      <StyledButton isFlat={isFlat} disabled={isDisabled} href={href} onClick={onClick}>
        {Children.toArray(children)}
      </StyledButton>
    </Div>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isFlat: PropTypes.bool,
};

export default Button;
