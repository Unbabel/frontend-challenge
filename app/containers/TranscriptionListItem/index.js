/**
 * TranscriptionListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import Checkbox from 'components/Checkbox';

import Div from './Div';

export function TranscriptionListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = (
    <Div>
      <Checkbox />
      {item.voice}
      {item.text}
    </Div>
  );

  // Render the content into a list item
  return <ListItem key={`transcription-${item.id}`} item={content} />;
}

TranscriptionListItem.propTypes = {
  item: PropTypes.object,
};

export default TranscriptionListItem;
