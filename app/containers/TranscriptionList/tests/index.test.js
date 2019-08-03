import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { render } from '@testing-library/react';

import configureStore from 'configureStore';
import TranscriptionListItem from '../index';

describe('<TranscriptionListItem />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<TranscriptionListItem loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <TranscriptionListItem loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).toBeInTheDocument();
  });

  it('should render the repositories if loading was successful', () => {
    const store = configureStore({ global: {} }, browserHistory);
    const transcriptions = [
      {
        id: 1,
        voice: 'Voice 2',
        text: 'This is a one line sentence made to show how it fits',
      },
    ];
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <TranscriptionListItem transcriptions={transcriptions} error={false} />
        </IntlProvider>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(<TranscriptionListItem repos={false} error={false} loading={false} />);

    expect(container).toBeEmpty();
  });
});
