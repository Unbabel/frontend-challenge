import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Logo from 'components/Logo';
import Button from 'components/Button';
import Icon from 'components/Icon';

import Wrapper from './Wrapper';
import ActionsBar from './ActionsBar';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <Wrapper theme={useContext(ThemeContext)}>
      <HeaderLink to="/">
        <Logo />
      </HeaderLink>
      <ActionsBar>
        <Button>
          <Icon name="upload" />
        </Button>
        <Button>
          <Icon name="download" />
        </Button>
      </ActionsBar>
    </Wrapper>
  );
}

export default Header;
