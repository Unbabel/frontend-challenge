// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Atom/Icon', module)
  .add('Person', () => (
    <Icon icon="person" />
  ))
  .add('Delete', () => (
    <Icon icon="delete" />
  ))
  .add('Upload', () => (
    <Icon icon="upload" />
  ))
  .add('FetchDocument', () => (
    <Icon icon="fetch-document" />
  ))
  .add('AddRow', () => (
    <Icon icon="add-row" />
  ))
  .add('palette', () => (
    <Icon icon="person" palette="primary" />
  ))
  .add('palette Secondary', () => (
    <Icon icon="person" palette="secondary" />
  ))
  .add('height', () => (
    <Icon icon="person" height={100} />
  ))
