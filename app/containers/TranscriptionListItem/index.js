/**
 * TranscriptionListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import Icon from 'components/Icon';
import TextInput from 'components/TextInput';
import TextArea from 'components/TextArea';

import Div from './Div';

import { COLORS } from '../../theme';

export function TranscriptionListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = (
    <Div>
      <article>
        <div>
          <Checkbox />
          <Icon name="person" size={26} color={COLORS.BLUE} />
        </div>
        <div>
          <TextInput id={`voice-${item.id}`} value={item.voice} label="title" />
          <TextArea id={`text-${item.id}`} value={item.text} label="text" />
        </div>
        <div>
          <Button>
            <Icon name="delete" size={16} />
          </Button>
        </div>
      </article>
    </Div>
  );

  // Render the content into a list item
  return <ListItem key={`transcription-${item.id}`} item={content} />;
}

TranscriptionListItem.propTypes = {
  item: PropTypes.object,
};

export default TranscriptionListItem;
