import {
  REQUEST_TRANSCRIPTION_DATA,
  POST_TRANSCRIPTION_DATA,
  RECEIVE_TRANSCRIPTION_DATA,
  UPDATE_TRANSCRIPTION_LIST,
  ADD_ELEMENT_TRANSCRIPTION_LIST,
  UPDATE_ELEMENT_TRANSCRIPTION_LIST,
  REMOVE_ELEMENT_TRANSCRIPTION_LIST,
} from '../actions/'

const defaultState = {
  isLoading: false,
  list: ['test'],
  error:{}
}

export default (state = defaultState, { type, data }) => {
  switch (type) {
    case 'REQUEST_TRANSCRIPTION_DATA':
      return {
        ...state,
        isLoading: true,
      }
    case 'POST_TRANSCRIPTION_DATA':
      return {
        ...state,
        isLoading: true,
      }
    case 'RECEIVE_TRANSCRIPTION_DATA':
      return {
        isLoading: false,
        list: data,
      }
    case 'UPDATE_TRANSCRIPTION_LIST':
      return { data: 'test' }
    case 'UPDATE_ELEMENT_TRANSCRIPTION_LIST':
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === data.id) {
            const updatedElement = { ...el, [data.element]: data.content }
            return updatedElement
          }
          return el
        }),
      }
    case 'ADD_ELEMENT_TRANSCRIPTION_LIST':
      return {
        ...state,
        list: [...state.list, data],
      }
    case 'REMOVE_ELEMENT_TRANSCRIPTION_LIST':
      return {
        ...state,
        list: state.list.filter((el) => {
          if (el.id === data) {
            return false
          }
          return true
        }),
      }
      case 'FAILURE_TRANSCRIPTION':
      console.log("FAILURE_TRANSCRIPTION")
      console.log(data)
      return {
        ...state,
        error:'An error occurred while trying to make the request'
      }

    default:
      return state
  }
}
