import React from 'react';

import Logo from 'components/Logo';

import ActionsBar from './ActionsBar';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <div>
      <HeaderLink to="/">
        <Logo />
      </HeaderLink>
      <ActionsBar />
    </div>
  );
}

export default Header;
