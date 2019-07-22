import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Block = styled.div`
  font-family: ${font('primary')};
  background-color: #F2F2F2;
  color: ${palette({ grayscale: 0 }, 1)};
`

Block.propTypes = {
  palette: PropTypes.string,
}

Block.defaultProps = {
  palette: 'grayscale',
}

export default Block
