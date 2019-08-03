/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeContext } from 'styled-components';

import Header from 'containers/Header';
import Container from 'components/Container';
import TranscriptionList from 'containers/TranscriptionList';

import Main from './Main';

export function HomePage() {
  return (
    <Main theme={useContext(ThemeContext)}>
      <Helmet>
        <title>Transcriptions</title>
      </Helmet>
      <Header />
      <Container>
        <TranscriptionList />
      </Container>
    </Main>
  );
}

export default HomePage;
