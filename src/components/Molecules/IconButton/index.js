import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import Icon from '../../Atoms/Icon/'
import Button from '../../Atoms/Button/'

/** *************************************
 *
 * ICON BUTTON Component
 *
 * Variants:
 *
 ************************************** */

const StyledButton = styled(Button)`
  max-width: ${props => props.hasText ? '100%' : '2.5em'};
  width: ${ifProp('hasText', 'auto', '2.5em')};
  padding: ${ifProp('hasText', '0 0.4375em', 0)};
  flex: 0 0 2.5em;
  box-sizing: border-box;
  border:none;
`

const Text = styled.span`
  padding: 0.4375em;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const StyledIcon = styled(Icon)`
  flex: none;
`

const IconButton = ({ icon, children, ...props }) => {
  const {right, height,
  } = props
  const iconElement = <StyledIcon height={height ? height / 2.5 : undefined} icon={icon} display="none" />
  return (
    <StyledButton hasText={!!children} {...props}>
      <Wrapper>
        {right || iconElement}
        {children
          && <Text className="text" >{children}</Text>
        }
        {right && iconElement}
      </Wrapper>
    </StyledButton>
  )
}


IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  breakpoint: PropTypes.number,
  right: PropTypes.bool,
  height: PropTypes.number,
  children: PropTypes.node,
}

IconButton.defaultProps = {
  breakpoint: 420,
}

export default IconButton
