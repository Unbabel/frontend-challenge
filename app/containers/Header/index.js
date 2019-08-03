import React, { memo, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectState, makeSelectTranscriptions } from 'containers/App/selectors';
import { loadTranscriptions, saveTranscriptions } from 'containers/App/actions';

import { STATE } from 'containers/App/constants';
import Container from 'components/Container';
import Logo from 'components/Logo';
import Button from 'components/Button';
import Icon from 'components/Icon';

import Nav from './Nav';
import Div from './Div';

import saga from './saga';

const key = 'Header';

function Header({ transcriptions, state, loadData, saveData, noActions }) {
  useInjectSaga({ key, saga });

  return (
    <Nav theme={useContext(ThemeContext)}>
      <Container>
        <Logo />
        {!noActions && (
          <Div>
            <Button onClick={() => saveData(transcriptions)} isDisabled={state === STATE.initial}>
              <Icon name="upload" size={24} />
            </Button>
            <Button onClick={loadData}>
              <Icon name="fetch-document" size={24} />
            </Button>
          </Div>
        )}
      </Container>
    </Nav>
  );
}

Header.propTypes = {
  state: PropTypes.oneOf(Object.values(STATE)),
  transcriptions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  noActions: PropTypes.bool,
  loadData: PropTypes.func,
  saveData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  transcriptions: makeSelectTranscriptions(),
  state: makeSelectState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadTranscriptions()),
    saveData: data => dispatch(saveTranscriptions(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
