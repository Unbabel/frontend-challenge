import styled from 'styled-components';

import { COLORS } from '../../theme';

const Span = styled.span`
  --toggleColor: #${COLORS.PURPLE};
  --toggleBgColor: #${COLORS.PURPLE};
  --toggleSize: 16px;
  --uiToggleSize: var(--toggleSize, 16px);
  --uiToggleIndent: var(--toggleIndent, 0.4em);
  --uiToggleBorderWidth: var(--toggleBorderWidth, 2px);
  --uiToggleColor: var(--toggleColor, #${COLORS.PURPLE});
  --uiToggleDisabledColor: var(--toggleDisabledColor, #${COLORS.GREY_LIGHT});
  --uiToggleBgColor: var(--toggleBgColor, #fff);
  --uiToggleArrowWidth: var(--toggleArrowWidth, 2px);
  --uiToggleArrowColor: var(--toggleArrowColor, #fff);

  display: inline-flex;
  cursor: pointer;
  min-height: var(--uiToggleSize);
  padding-left: calc(var(--uiToggleSize) + var(--uiToggleIndent));

  &:before,
  &:after {
    content: '';
    box-sizing: border-box;
    width: 1em;
    height: 1em;
    font-size: var(--uiToggleSize);

    position: absolute;
    left: 0;
    top: 0;
  }

  &:before {
    border: var(--uiToggleBorderWidth) solid var(--uiToggleColor);
    z-index: 2;
  }

  input:disabled ~ &:before {
    border-color: var(--uiToggleDisabledColor);
  }

  input:not(:disabled) ~ &:after {
    background-color: var(--uiToggleColor);
    opacity: 0;
  }

  input:not(:disabled):checked ~ &:after {
    opacity: 1;
  }

  > span {
    margin-top: auto;
    margin-bottom: auto;
  }

  > span:before {
    content: '';
    box-sizing: border-box;
    width: 0;
    height: 0;
    font-size: var(--uiToggleSize);

    border-left-width: 0;
    border-bottom-width: 0;
    border-left-style: solid;
    border-bottom-style: solid;
    border-color: var(--uiToggleArrowColor);

    position: absolute;
    top: 0.5428em;
    left: 0.2em;
    z-index: 3;

    transform-origin: left top;
    transform: rotate(-40deg) skew(10deg);
  }

  input:not(:disabled):checked ~ & > span:before {
    width: 0.5em;
    height: 0.25em;
    border-left-width: var(--uiToggleArrowWidth);
    border-bottom-width: var(--uiToggleArrowWidth);
    will-change: width, height;
    transition: width 0.1s ease-out 0.2s, height 0.2s ease-out;
  }

  &:before,
  &:after {
    border-radius: 3px;
  }

  input:not(:disabled) ~ &:before,
  input:not(:disabled) ~ &:after {
    opacity: 1;
    transform-origin: center center;
    will-change: transform;
    transition: transform 0.2s ease-out;
  }

  input:not(:disabled) ~ &:before {
    transform: rotateY(0deg);
    transition-delay: 0.2s;
  }

  input:not(:disabled) ~ &:after {
    transform: rotateY(90deg);
  }

  input:not(:disabled):checked ~ &:before {
    transform: rotateY(-90deg);
    transition-delay: 0s;
  }

  input:not(:disabled):checked ~ &:after {
    transform: rotateY(0deg);
    transition-delay: 0.2s;
  }

  > span:before {
    opacity: 0;
  }

  input:not(:disabled):checked ~ & > span:before {
    opacity: 1;
    transition: opacity 0.1s ease-out 0.3s, width 0.1s ease-out 0.5s, height 0.2s ease-out 0.3s;
  }
`;

export default Span;
