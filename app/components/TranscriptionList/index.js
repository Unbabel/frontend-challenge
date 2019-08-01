import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import Button from 'components/Button';
import Icon from 'components/Icon';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TranscriptionListItem from 'containers/TranscriptionListItem';

import { STATE } from 'containers/App/constants';
import { COLORS } from '../../theme';

import Div from './Div';
import P from './P';

function TranscriptionList({ state, error, transcriptions }) {
  let content;
  if (state === STATE.loading) {
    content = <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const item = (
      <div>
        <P color={COLORS.GREY_LIGHT}>Something went wrong, please try again!</P>
      </div>
    );
    const ErrorComponent = () => <ListItem item={item} />;
    content = <List component={ErrorComponent} />;
  }

  if (transcriptions !== false) {
    const item = (
      <div>
        <P color={COLORS.GREY_LIGHT}>
          Nothing to show. Please click on the
          <span>
            <Icon name="fetch-document" size={22} color={COLORS.GREY_LIGHT} />
          </span>
          to load transcriptions.
        </P>
      </div>
    );
    const EmptyList = () => <ListItem item={item} />;
    if (transcriptions.length === 0) {
      content = <List component={EmptyList} />;
    } else if (transcriptions.length > 0) {
      content = <List items={transcriptions} component={TranscriptionListItem} />;
    }
  }

  return (
    <Div theme={useContext(ThemeContext)}>
      {content}
      <Button>
        <Icon name="add-row" color={COLORS.GREY_DARK} />
      </Button>
    </Div>
  );
}

TranscriptionList.propTypes = {
  state: PropTypes.string,
  error: PropTypes.any,
  transcriptions: PropTypes.any,
};

export default TranscriptionList;
