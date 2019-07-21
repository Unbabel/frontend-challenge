import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {  ThemeProvider } from 'styled-components'
// injectGlobal

import theme from './themes/default'
import HomePage from './Pages/HomePage/'


// injectGlobal`
//   body {
//     margin: 0;
//   }
// `

const App = ()=> {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
