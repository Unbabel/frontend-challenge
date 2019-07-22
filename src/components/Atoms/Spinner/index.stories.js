import React from 'react'
import { storiesOf } from '@storybook/react'
import Spinner from '.'

storiesOf('Atom/Spinner', module)
  .add('default', () => (
    <Spinner />
  ))
  .add('another palette', () => (
    <Spinner palette="secondary" />
  ))
