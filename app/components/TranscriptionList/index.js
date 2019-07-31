import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Icon from 'components/Icon';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TranscriptionListItem from 'containers/TranscriptionListItem';

import Div from './Div';

function TranscriptionList({ loading, error, transcriptions }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => <ListItem item="Something went wrong, please try again!" />;
    return <List component={ErrorComponent} />;
  }

  if (transcriptions !== false) {
    return (
      <Div>
        <List items={transcriptions} component={TranscriptionListItem} />
        <Button>
          <Icon name="add-row" />
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
