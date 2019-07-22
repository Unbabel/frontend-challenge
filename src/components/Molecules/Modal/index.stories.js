import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Modal from '.'

storiesOf('Molecules/Modal', module)
  .add('default', () => (
    <Modal onClose={action('closed')} isOpen>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua    </Modal>
  ))
  .add('with title', () => (
    <Modal onClose={action('closed')} title="Hello" isOpen>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua    </Modal>
  ))
  .add('closeable', () => (
    <Modal onClose={action('closed')} title="Hello" closeable isOpen>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua    </Modal>
  ))
