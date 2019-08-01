import React, { memo, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectTranscriptions } from 'containers/App/selectors';
import { loadTranscriptions, saveTranscriptions } from 'containers/App/actions';

import Container from 'components/Container';
import Logo from 'components/Logo';
import Button from 'components/Button';
import Icon from 'components/Icon';

import Nav from './Nav';
import Div from './Div';

import saga from './saga';

const key = 'Header';

function Header({ transcriptions, loadData, saveData, noActions }) {
  useInjectSaga({ key, saga });

  return (
    <Nav theme={useContext(ThemeContext)}>
      <Container>
        <Logo />
        {!noActions && (
          <Div>
            <Button onClick={() => saveData(transcriptions)}>
              <Icon name="upload" size={24} />
            </Button>
            <Button onClick={() => loadData()}>
              <Icon name="fetch-document" size={24} />
            </Button>
          </Div>
        )}
      </Container>
    </Nav>
  );
}

Header.propTypes = {
  transcriptions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  noActions: PropTypes.bool,
  loadData: PropTypes.func,
  saveData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  transcriptions: makeSelectTranscriptions(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadTranscriptions()),
    saveData: transcriptions => dispatch(saveTranscriptions(transcriptions)),
    // loadData: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadTranscriptions());
    // },
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
