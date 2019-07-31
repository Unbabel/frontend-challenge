/**
 * TranscriptionListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export function TranscriptionListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = <Wrapper />;

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
}

TranscriptionListItem.propTypes = {
  item: PropTypes.object,
};

export default TranscriptionListItem;
