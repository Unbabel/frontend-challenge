
import React from 'react'
import { storiesOf } from '@storybook/react'
import IconButton from '.'

storiesOf('Molecules/IconButton', module)
  .add('default', () => (
    <IconButton icon="person" transparent />
  ))
  .add('Person', () => (
    <IconButton icon="person" transparent />
  ))
  .add('Upload', () => (
    <IconButton icon="upload" transparent />
  ))
  .add('Delete', () => (
    <IconButton icon="delete" transparent />
  ))
  .add('Fetch Document', () => (
    <IconButton icon="fetch-document" transparent />
  ))
  .add('Add Row', () => (
    <IconButton icon="add-row" transparent />
  ))
  .add('transparent', () => (
    <IconButton icon="person" transparent>Hello</IconButton>
  ))
  .add('with icon on right', () => (
    <IconButton icon="person" right>Hello</IconButton>
  ))

  .add('without text', () => (
    <IconButton icon="person" />
  ))

  .add('height', () => (
    <IconButton icon="person" height={100}>Hello</IconButton>
  ))
