import request from './request';

const API = {
  transcriptions: 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
};

export async function loadTranscriptions() {
  return request(API.transcriptions);
}

export async function saveTranscriptions(transcriptions) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const method = 'POST';
  const payload = JSON.stringify(transcriptions);

  return request(API.transcriptions, {
    headers,
    method,
    body: payload,
  });
}
