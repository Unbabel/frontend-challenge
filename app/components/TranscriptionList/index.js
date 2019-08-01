import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import Button from 'components/Button';
import Icon from 'components/Icon';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TranscriptionListItem from 'containers/TranscriptionListItem';

import { COLORS } from '../../theme';

import Div from './Div';
import P from './P';

function TranscriptionList({ loading, error, transcriptions }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => <ListItem item="Something went wrong, please try again!" />;
    return <List component={ErrorComponent} />;
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
    return (
      // eslint-disable-next-line react-hooks/rules-of-hooks
      <Div theme={useContext(ThemeContext)}>
        {transcriptions.length === 0 ? (
          <List component={EmptyList} />
        ) : (
          <List items={transcriptions} component={TranscriptionListItem} />
        )}
        <Button>
          <Icon name="add-row" color={COLORS.GREY_DARK} />
        </Button>
      </Div>
    );
  }

  return null;
}

TranscriptionList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  transcriptions: PropTypes.any,
};

export default TranscriptionList;
