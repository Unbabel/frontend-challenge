import React from 'react';
import { FormattedMessage } from 'react-intl';

import ActionsBar from './ActionsBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <HeaderLink to="/">
        <FormattedMessage {...messages.title} />
      </HeaderLink>
      <ActionsBar>download upload</ActionsBar>
    </div>
  );
}

export default Header;
