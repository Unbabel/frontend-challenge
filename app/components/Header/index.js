import React from 'react';

import Logo from 'components/Logo';
import Button from 'components/Button';
import Icon from 'components/Icon';

import ActionsBar from './ActionsBar';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <div>
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
    </div>
  );
}

export default Header;
