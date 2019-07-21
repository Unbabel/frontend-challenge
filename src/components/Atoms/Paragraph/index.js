import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'


/** *************************************
 *
 * PARAGRAPH Component
 *
 * Variants:

 ************************************** */

// Specific style
const Paragraph = styled.p`
  font-family: ${font('itemContent')};
  color: ${palette('itemContent', 0)};
  font-size: 18px;
  font-weight: normal;
  margin: 1rem 0 0;
`
// Proptypes
Paragraph.propTypes = {
}

export default Paragraph
