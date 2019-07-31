/**
 * TranscriptionListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import Checkbox from 'components/Checkbox';
import Icon from 'components/Icon';
import TextInput from 'components/TextInput';

import Div from './Div';

import { COLORS } from '../../theme';

export function TranscriptionListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = (
    <Div>
      <div>
        <Checkbox />
        <Icon name="person" size={26} color={COLORS.BLUE} />
      </div>
      <div>
        <TextInput id={`voice-${item.id}`} value={item.voice} label="title" />
        <textArea>asd</textArea>
      </div>
    </Div>
  );

  // Render the content into a list item
  return <ListItem key={`transcription-${item.id}`} item={content} />;
}

TranscriptionListItem.propTypes = {
  item: PropTypes.object,
};

export default TranscriptionListItem;
