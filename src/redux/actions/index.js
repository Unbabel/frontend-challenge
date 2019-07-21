export const REQUEST_HELLO_WORLD = 'REQUEST_HELLO_WORLD'
export const RECEIVE_HELLO_WORLD = 'RECEIVE_HELLO_WORLD'

export const REQUEST_TRANSCRIPTION_DATA = 'REQUEST_TRANSCRIPTION_DATA'
export const POST_TRANSCRIPTION_DATA = 'POST_TRANSCRIPTION_DATA'
export const RECEIVE_TRANSCRIPTION_DATA = 'RECEIVE_TRANSCRIPTION_DATA'
export const ADD_ELEMENT_TRANSCRIPTION_LIST = 'ADD_ELEMENT_TRANSCRIPTION_LIST'
export const UPDATE_ELEMENT_TRANSCRIPTION_LIST = 'UPDATE_ELEMENT_TRANSCRIPTION_LIST'
export const REMOVE_ELEMENT_TRANSCRIPTION_LIST = 'REMOVE_ELEMENT_TRANSCRIPTION_LIST'


export const addElementTranscriptionData = data => ({ type: ADD_ELEMENT_TRANSCRIPTION_LIST, data })
export const updateElementTranscriptionData = data => ({ type: UPDATE_ELEMENT_TRANSCRIPTION_LIST, data })
export const removeElementTranscriptionData = data => ({ type: REMOVE_ELEMENT_TRANSCRIPTION_LIST, data })
export const requestTranscriptionData = () => ({ type: REQUEST_TRANSCRIPTION_DATA })
export const postTranscriptionData = data => ({ type: POST_TRANSCRIPTION_DATA, data })
export const receiveTranscriptionData = data => ({ type: RECEIVE_TRANSCRIPTION_DATA, data })
