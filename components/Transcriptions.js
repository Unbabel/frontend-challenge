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
                  <label className='checkbox'>
                    <input type='checkbox' className='sr-only' />
                    <span className='checkbox-mark' />
                  </label>
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
            margin: 10vh 20vh 0 20vh;
          }

          .grid-item {
            display: grid;
            grid-template-columns: [checkbox] min-content [icon] min-content [content] auto [delete] 24px;
            grid-column-gap: 16px;
            padding: 32px 24px;
            border-bottom: 1px #eaedef solid;
          }

          .grid-item:hover {
            box-shadow: 0 0 2px #859eff;
          }

          .delete {
            grid-column: delete;
            grid-row: 1;
            align-self: center;
            justify-self: center;
            cursor: pointer;
          }

          svg {
            display: block;
          }

          .checkbox,
          .icon,
          .voice {
            align-self: center;
          }

          .checkbox,
          .icon {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .checkbox-mark {
            display: flex;
            justify-content: center;
            width: 16px;
            height: 16px;
            border: 2px solid #859eff;
            border-radius: 2px;
            cursor: pointer;
          }

          .checkbox input:checked + .checkbox-mark {
            background-color: #859eff;
          }

          .checkbox input:checked + .checkbox-mark::after {
            content: '';
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }

          .voice {
            font-family: 'Montserrat';
            font-weight: 600;
            color: #566074;
          }

          .text {
            font-family: 'Open Sans';
            grid-column: content;
            color: #778195;
          }

          .error {
            grid-column: delete;
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

          /* https://accessibility.18f.gov/hidden-content/ */
          .sr-only {
            border: 0;
            clip: rect(0 0 0 0);
            clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
            white-space: nowrap;
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
