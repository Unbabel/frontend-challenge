/**
 * Test the repo list item
 */

import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import { TranscriptionListItem } from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <TranscriptionListItem {...props} />
    </IntlProvider>,
  );

describe('<TranscriptionListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      id: 1,
      voice: 'Voice 2',
      text: 'This is a one line sentence made to show how it fits',
    };
  });

  it('should render a ListItem', () => {
    const { container } = renderComponent({ item });
    expect(container.firstChild).toMatchSnapshot();
  });
});
