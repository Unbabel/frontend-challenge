import React, { Fragment, useState, useCallback } from 'react';
import { useStore } from './store';
import Person from '../static/svg/person.svg';
import AddRow from '../static/svg/add-row.svg';

const Transcriptions = () => {
  const [store, dispatch] = useStore();
  const transcriptions = Object.values(store.transcriptions);
  const [editable, setEditable] = useState({});
  const editTranscription = useCallback(id => () =>
    setEditable(state => ({ ...state, [id]: true }))
  );
  const addTranscription = useCallback(() => {
    dispatch({ type: 'create' });
  }, [dispatch]);

  return (
    <>
      {transcriptions.length > 0 && (
        <>
          <div className='container'>
            <div className='grid'>
              {transcriptions.map(({ id, text, voice }, idx, arr) => {
                return (
                  <Fragment key={id}>
                    {/* <div className='top'> */}
                    <div className='checkbox'>
                      <input type='checkbox' />
                    </div>
                    <div className='icon'>
                      <Person />
                    </div>
                    {/* </div> */}
                    <div className='voice' onClick={editTranscription(id)}>
                      {editable[id] ? <textarea>{voice}</textarea> : voice}
                    </div>
                    <div className='text' onClick={editTranscription(id)}>
                      {editable[id] ? <textarea>{text}</textarea> : text}
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
            grid-template-columns: [checkbox] 1fr [icon] 1fr [content] auto;
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
            grid-column: 3 / 4;
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
