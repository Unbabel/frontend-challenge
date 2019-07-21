import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Atom/Button', module)
  .add('default', () => (
    <Button>Hello</Button>
  ))
  .add('another palette', () => (
    <Button palette="secondary">Hello</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Hello</Button>
  ))
  .add('transparent', () => (
    <Button transparent>Hello</Button>
  ))
  .add('height', () => (
    <Button height={100}>Hello</Button>
  ))
  .add('link', () => (
    <Button href="#">Link</Button>
  ))
