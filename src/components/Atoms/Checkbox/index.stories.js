// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from '.'

storiesOf('Atom/Checkbox', module)
  .add('Default', () => (
    <Checkbox />
  ))
