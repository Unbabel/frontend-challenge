/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeContext } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Header from 'containers/Header';
import Container from 'components/Container';
import messages from './messages';

import Main from './Main';

export default function NotFound() {
  return (
    <Main theme={useContext(ThemeContext)}>
      <Helmet>
        <title>Transcriptions</title>
      </Helmet>
      <Header noActions />
      <Container>
        <FormattedMessage {...messages.notFound} />
        <br />
        <FormattedMessage {...messages.notFoundMessage} />
      </Container>
    </Main>
  );
}
