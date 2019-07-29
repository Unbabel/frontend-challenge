import React, { Fragment, useState, useCallback } from 'react';
import { useStore } from './store';
import Person from '../static/svg/person.svg';
import AddRow from '../static/svg/add-row.svg';
import Delete from '../static/svg/delete.svg';

const Transcriptions = () => {
  const [store, dispatch] = useStore();
  const transcriptions = Object.values(store.transcriptions);
  const [editable, setEditable] = useState({});
  const [deletable, setDeletable] = useState({});

  const createTranscription = useCallback(
    () =>
      dispatch({
        type: 'create',
      }),
    [dispatch]
  );
  const updateTranscription = useCallback(
    (id, type) => ({ target: { textContent } }) =>
      dispatch({
        type: 'update',
        payload: { id, [type]: textContent },
      }),
    [dispatch]
  );
  const deleteTranscription = useCallback(
    id => () =>
      dispatch({
        type: 'delete',
        payload: { id },
      }),
    [dispatch]
  );

  const setEditTranscription = useCallback(
    (id, type) => () => setEditable({ [id]: type }),
    [setEditable]
  );
  const setDeleteTranscription = useCallback(
    (id, deletable) => () => setDeletable({ [id]: deletable }),
    [setDeletable]
  );

  return (
    <>
      {transcriptions.length > 0 && (
        <>
          <div className='grid'>
            {transcriptions.map(({ id, text, voice }) => {
              return (
                <div
                  key={id}
                  onMouseEnter={setDeleteTranscription(id, true)}
                  onMouseLeave={setDeleteTranscription(id, false)}
                  className='grid-item'
                >
                  <div className='checkbox'>
                    <input type='checkbox' />
                  </div>
                  <div className='icon'>
                    <Person />
                  </div>
                  <div
                    className='voice'
                    onClick={setEditTranscription(id, 'voice')}
                    onBlur={updateTranscription(id, 'voice')}
                    contentEditable={editable[id] === 'voice'}
                    suppressContentEditableWarning
                  >
                    {voice || 'Insert Voice'}
                  </div>
                  <div
                    className='text'
                    onClick={setEditTranscription(id, 'text')}
                    onBlur={updateTranscription(id, 'text')}
                    contentEditable={editable[id] === 'text'}
                    suppressContentEditableWarning
                  >
                    {text || 'Insert Text'}
                  </div>
                  {deletable[id] && (
                    <div className='delete' onClick={deleteTranscription(id)}>
                      <Delete />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className='add-row' onClick={createTranscription}>
            <AddRow />
          </div>
        </>
      )}
      <style jsx>
        {`
          .grid {
            border: 1px #eaedef solid;
            margin: 10vh 40vh 0 40vh;
          }

          .grid-item {
            display: grid;
            grid-template-columns: [checkbox] 0fr [icon] 0fr [content] auto [delete] min-content;
            grid-column-gap: 16px;
            padding: 32px 24px;
            border-bottom: 1px #eaedef solid;
          }

          .grid-item:hover {
            box-shadow: 0 0 2px #859eff;
          }

          .hover {
            position: absolute;
            width: 100%;
            height: 100%;
            top: -24px;
            left: -24px;
          }

          .delete {
            grid-column: delete;
            grid-row: 1;
            align-self: center;
            justify-self: center;
            cursor: pointer;
          }

          .delete :global(svg) {
            display: block;
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
          }

          .error {
            grid-column: delete;
          }

          .icon :global(svg) {
            display: block;
          }

          .add-row {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 24px 0;
          }

          .add-row :global(svg) {
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
