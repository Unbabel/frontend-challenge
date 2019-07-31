import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Modern CSS Reset - https://alligator.io/css/minimal-css-reset/ */
  body, h1, h2, h3, h4, h5, h6, p, ol, ul, input[type=text], input[type=email], button {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    text-decoration: underline;
    color: inherit;
    &.active {
      text-decoration: none;
    }
  }
  
  .hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    pointer-events: none;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body,
  h1 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontsLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    h1 {
      font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }
  
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
