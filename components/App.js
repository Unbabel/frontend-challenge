import React from 'react';
import Header from './Header';
import Transcriptions from './Transcriptions';
import { withStore } from './store';

const App = () => (
  <>
    <Header />
    <Transcriptions />
  </>
);

export default withStore(App);
