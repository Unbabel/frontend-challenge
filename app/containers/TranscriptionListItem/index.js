/**
 * TranscriptionListItem
 *
 * Lists the name and the issue count of a repository
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectTranscriptions } from 'containers/App/selectors';
import {
  createTranscription,
  updateTranscription,
  deleteTranscription,
  loadTranscriptions,
  saveTranscriptions,
} from 'containers/App/actions';

import ListItem from 'components/ListItem';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import Icon from 'components/Icon';
import TextInput from 'components/TextInput';
import TextArea from 'components/TextArea';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Div from './Div';

import { COLORS } from '../../theme';

import saga from './saga';

const key = 'TranscriptionListItem';

export function TranscriptionListItem({ item, createItem, updateItem, deleteItem }) {
  useInjectSaga({ key, saga });

  const [title, setTitle] = useState(item.voice);
  const [text, setText] = useState(item.text);

  const handleUpdateTitle = title => {
    setTitle(title);
  };

  const handleUpdateText = text => {
    setText(text);
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
          <TextArea updateText={handleUpdateText} id={`text-${item.id}`} value={text} label="text" />
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
  createItem: PropTypes.func,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    createItem: transcriptions => dispatch(createTranscription(transcriptions)),
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
