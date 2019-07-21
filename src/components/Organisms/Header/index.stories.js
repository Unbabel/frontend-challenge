import React from 'react'
import { storiesOf } from '@storybook/react'

import  Header  from './'

storiesOf('Molecules/Header', module)
  .add('default', () => (
    <Header />
  ))
