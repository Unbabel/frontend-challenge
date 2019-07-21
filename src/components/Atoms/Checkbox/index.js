import React, { useState } from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'


const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: .25rem;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? '#ffffff' : '#859EFF')}
  border-radius: 3px;
  border: 3px solid #859EFF;
  transition: all 150ms;
  cursor:pointer;
  line-height:1rem;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'hidden' : 'visible')}
  }
`

const Checkbox = ({ ...props }) => {
  const [checkedItem, setCheckedItem] = useState({ value: false })

  const handleChange = (event) => {
    setCheckedItem(!checkedItem)
    console.log('checkedItem: ', checkedItem)
  }
  return (
    <CheckboxContainer>
      <HiddenCheckbox {...props} />
      <StyledCheckbox {...props} checked={checkedItem} onClick={handleChange}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}
export default Checkbox
