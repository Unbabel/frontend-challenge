import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

// border: 1px solid ${palette(1, true)};
const HorizontalRule = styled.hr`
  background: white;
  border: 1px solid #EAEDEF;s
  width: 100%;
`

HorizontalRule.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

HorizontalRule.defaultProps = {
  palette: 'grayscale',
}

export default HorizontalRule
