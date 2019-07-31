import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createMemoryHistory } from 'history';

import Logo from '../index';
import configureStore from '../../../configureStore';

describe('<Logo />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a h1', () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ConnectedRouter history={history}>
            <Logo />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
