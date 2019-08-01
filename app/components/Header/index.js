import React, { memo, useContext } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Logo from 'components/Logo';
import Button from 'components/Button';
import Icon from 'components/Icon';

import { loadTranscriptions } from 'containers/App/actions';

import Nav from './Nav';
import Div from './Div';

function Header({ loadData }) {
  return (
    <Nav theme={useContext(ThemeContext)}>
      <Container>
        <Logo />
        <Div>
          <Button>
            <Icon name="upload" size={24} />
          </Button>
          <Button onClick={loadData}>
            <Icon name="fetch-document" size={24} />
          </Button>
        </Div>
      </Container>
    </Nav>
  );
}

Header.propTypes = {
  loadData: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadTranscriptions()),
    // loadData: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadTranscriptions());
    // },
  };
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
