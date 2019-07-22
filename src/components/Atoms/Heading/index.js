import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { switchProp, theme, prop } from 'styled-tools'
import { font, palette } from 'styled-theme'

/** *************************************
 *
 * HEADING Component
 *
 * Variants:
 * -Default
 * -App Title
 * -List Title
 ************************************** */

export const HEADING_VARIANTS = {
  DEFAULT: 'default',
  APP_TITLE: 'appTitle',
  ITEM_TITLE: 'itemTitle',
}

const styles = css`
  font-family: ${font('primary')};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
`

/* Put all theme specific styles here along with Default Styling.  All styles here should be pulled from the theme object */
export const theming = css`
  ${switchProp(
    prop('variant', 'none'),
    {
      [HEADING_VARIANTS.DEFAULT]: css`
      `,

      [HEADING_VARIANTS.APP_TITLE]: css`
        weight:450;
        color: #414C5E;
        font-size:18px;
      `,

      [HEADING_VARIANTS.ITEM_TITLE]: css`
        weight:600;
        color: #566074;
        font-size:16px;
      `,
    },
    HEADING_VARIANTS.PRIMARY
  )}
`

const Heading = styled(
  ({
    level, children, reverse, palette, theme, ...props
  }) => React.createElement(`h${level}`, props, children)
)`
    ${styles};
    ${theming};
`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(HEADING_VARIANTS)), // Used for displaying different varieties
  disabled: PropTypes.bool,
}

Heading.defaultProps = {
  variant: HEADING_VARIANTS.DEFAULT,
  level: 1,
}

export default Heading
