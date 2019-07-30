import React, { useCallback } from 'react';
import fetch from 'isomorphic-unfetch';

import { useStore } from './store';

import FetchDocument from '../static/svg/fetch-document.svg';
import Upload from '../static/svg/upload.svg';

const Header = () => {
  const [store, dispatch] = useStore();
  const fetchTranscriptions = useCallback(async () => {
    const response = await fetch(
      'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c'
    ).then(function(response) {
      if (response.status >= 400) {
        throw new Error('Unable to get Transcriptions');
      }
      return response.json();
    });

    dispatch({ type: 'fetch', payload: response });
  });

  const uploadTranscriptions = useCallback(async () => {
    fetch('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c', {
      method: 'POST',
      body: JSON.stringify(Object.values(store.transcriptions)),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(function(response) {
      if (response.status >= 400) {
        throw new Error('Unable to upload Transcriptions');
      }
    });
  });

  return (
    <div className='container'>
      <div>Transcriptions</div>
      <div className='icons'>
        <span className='icon upload'>
          <Upload data-testid='upload' onClick={uploadTranscriptions} />
        </span>
        <span className='icon fetch'>
          <FetchDocument data-testid='fetch' onClick={fetchTranscriptions} />
        </span>
      </div>
      <style jsx>
        {`
          .container {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24),
              0 1px 3px 0 rgba(0, 0, 0, 0.12);
            width: 100%;
            height: 64px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: Montserrat;
            font-size: 18px;
            font-weight: 600;
            color: #414c5e;
            padding: 0 calc(20vh + 24px);
          }

          .upload {
            margin-right: 24px;
          }

          .icon {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
