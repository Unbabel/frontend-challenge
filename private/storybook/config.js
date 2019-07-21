import { configure, addParameters } from '@storybook/react';

import theTheme from './theTheme';


// Option defaults.
addParameters({
  options: {
    theme: theTheme,
  },
  })

function loadStories() {
  const req = require.context('../../src/components/', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

