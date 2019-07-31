import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Container from 'components/Container';
import Logo from 'components/Logo';
import Button from 'components/Button';
import Icon from 'components/Icon';

import Nav from './Nav';
import Div from './Div';

function Header() {
  return (
    <Nav theme={useContext(ThemeContext)}>
      <Container>
        <Logo />
        <Div>
          <Button>
            <Icon name="upload" size={24} />
          </Button>
          <Button>
            <Icon name="fetch-document" size={24} />
          </Button>
        </Div>
      </Container>
    </Nav>
  );
}

export default Header;
