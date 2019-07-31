import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 16px;

  &:active {
    transform: translateY(1px);
  }
`;

export default buttonStyles;
