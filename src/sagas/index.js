
import {
    call, put, takeEvery, takeLatest,
  } from 'redux-saga/effects'
  import { fetchTranscriptions, postTranscriptions } from '../services/api'
  
  import {
    REQUEST_TRANSCRIPTION_DATA,
    POST_TRANSCRIPTION_DATA,
    receiveTranscriptionData,
    failureTranscription
  } from '../redux/actions/'
  
  
  function* postApiData(action) {
    try {
      const data = yield call(postTranscriptions, action.data)
      yield put(receiveTranscriptionData(data.data))
    } catch (e) {
      // yield put(failureTranscription(e))
      console.log('Errror')
      console.log(e)
    }
  }
  
  
  function* getApiData(action) {
    try {
      const data = yield call(fetchTranscriptions)
      console.log(data)
      yield put(receiveTranscriptionData(data.data))
    } catch (e) {
      // yield put(failureTranscription(e))

      console.log('Errror')
      console.log(e)
    }
  }
  
  export default function* mySaga() {
    yield takeLatest(REQUEST_TRANSCRIPTION_DATA, getApiData)
    yield takeLatest(POST_TRANSCRIPTION_DATA, postApiData)
  }
  