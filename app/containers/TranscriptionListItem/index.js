/**
 * TranscriptionListItem
 *
 * Lists the name and the issue count of a repository
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { updateTranscription, deleteTranscription } from 'containers/App/actions';

import ListItem from 'components/ListItem';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import Icon from 'components/Icon';
import TextInput from 'components/TextInput';
import TextArea from 'components/TextArea';

import { connect } from 'react-redux';
import { compose } from 'redux';
import Div from './Div';

import { COLORS } from '../../theme';

export function TranscriptionListItem({ item, updateItem, deleteItem }) {
  const [title, setTitle] = useState(item.voice);
  const [body, setBody] = useState(item.text);

  useEffect(() => {
    if (title !== item.voice || body !== item.text) {
      const nItem = {
        id: item.id,
        voice: title,
        text: body,
      };
      updateItem(nItem);
    }
  }, [title, body]);

  const handleUpdateTitle = ntitle => {
    setTitle(ntitle);
  };

  const handleUpdateText = ntext => {
    setBody(ntext);
  };

  const handleDeleteItem = () => {
    deleteItem(item.id);
  };

  const content = (
    <Div>
      <article>
        <div>
          <Checkbox />
          <Icon name="person" size={26} color={COLORS.BLUE} />
        </div>
        <div>
          <TextInput updateTitle={handleUpdateTitle} id={`voice-${item.id}`} value={title} label="title" />
          <TextArea updateText={handleUpdateText} id={`text-${item.id}`} value={body} label="text" />
        </div>
        <div>
          <Button onClick={handleDeleteItem}>
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
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    updateItem: transcriptions => dispatch(updateTranscription(transcriptions)),
    deleteItem: id => dispatch(deleteTranscription(id)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TranscriptionListItem);
