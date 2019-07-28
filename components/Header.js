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

    debugger;
  });

  return (
    <div className='container'>
      <div>Transcriptions</div>
      <div className='icons'>
        <span className='icon fetch'>
          <FetchDocument onClick={fetchTranscriptions} />
        </span>
        <span className='icon upload'>
          <Upload />
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
            justify-content: space-around;
            align-items: center;
            font-family: Montserrat;
            font-size: 18px;
            font-weight: 600;
          }

          .fetch {
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
