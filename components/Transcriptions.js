import React, { Fragment, useState, useCallback } from 'react';
import { useStore } from './store';
import Person from '../static/svg/person.svg';
import AddRow from '../static/svg/add-row.svg';
import Delete from '../static/svg/delete.svg';
import { updateExpression } from '@babel/types';

const Transcriptions = () => {
  const [store, dispatch] = useStore();
  const transcriptions = Object.values(store.transcriptions);
  const [editable, setEditable] = useState({});

  const editTranscription = useCallback(
    ({ id, type }) => () =>
      // there can be only one currently editable transcription
      setEditable({ [id]: true, [type]: true }),
    [setEditable]
  );
  const updateTranscription = useCallback(
    ({ id, type }) => ({ target: { textContent } }) =>
      dispatch({
        type: 'update',
        payload: { id, [type]: textContent },
      }),
    [dispatch]
  );
  const addTranscription = useCallback(
    () =>
      dispatch({
        type: 'create',
      }),
    [dispatch]
  );

  return (
    <>
      {transcriptions.length > 0 && (
        <>
          <div className='container'>
            <div className='grid'>
              {transcriptions.map(({ id, text, voice }, idx, arr) => {
                return (
                  <Fragment key={id}>
                    <div className='checkbox'>
                      <input type='checkbox' />
                    </div>
                    <div className='icon'>
                      <Person />
                    </div>
                    <div
                      className='voice'
                      onClick={editTranscription({ id, type: 'voice' })}
                      onBlur={updateTranscription({ id, type: 'voice' })}
                      contentEditable={
                        Object.prototype.hasOwnProperty.call(editable, id) &&
                        editable.voice
                      }
                      suppressContentEditableWarning
                    >
                      {voice}
                    </div>
                    <div
                      className='text'
                      onClick={editTranscription({ id, type: 'text' })}
                      onBlur={updateTranscription({ id, type: 'text' })}
                      contentEditable={
                        Object.prototype.hasOwnProperty.call(editable, id) &&
                        editable.text
                      }
                      suppressContentEditableWarning
                    >
                      {text}
                    </div>
                    {arr.length - 1 !== idx && <hr className='separator' />}
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className='add-row' onClick={addTranscription}>
            <AddRow />
          </div>
        </>
      )}
      <style jsx>
        {`
          .container {
            margin: 10vh 40vh 0 40vh;
            padding: 24px;
            border: 1px #eaedef inset;
          }

          .grid {
            display: grid;
            grid-template-columns: [checkbox] 0fr [icon] 0fr [content] auto;
            grid-column-gap: 16px;
          }

          .checkbox,
          .icon,
          .voice {
            align-self: center;
          }

          .voice {
            font-family: 'Montserrat';
            font-weight: 600;
          }

          .text {
            font-family: 'Open Sans';
            grid-column: content;
          }

          .voice:global(:focus),
          .text:gloval(:focus) {
            box-shadow: 0 0 5px rgba(81, 203, 238, 1);
            padding: 3px 0px 3px 3px;
            margin: 5px 1px 3px 0px;
            border: 1px solid rgba(81, 203, 238, 1);
          }

          .error {
            grid-column: delete;
          }

          .icon :global(svg) {
            display: block;
          }

          .separator {
            grid-column: 1 / -1;
            margin: 24px -24px;
            border: 1px #eaedef solid;
          }

          .add-row {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 24px 0;
            cursor: pointer;
          }
        `}
      </style>
      <style jsx>
        {`
          .container {
            border: ${Object.keys(transcriptions).length > 0
              ? '1px solid #eaedef'
              : '0'};
          }
        `}
      </style>
    </>
  );
};

export default Transcriptions;
