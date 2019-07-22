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
      console.log(data)
      return {
        isLoading: false,
        list: data,
      }
    case 'UPDATE_TRANSCRIPTION_LIST':
      return { data: 'test' }
    case 'UPDATE_ELEMENT_TRANSCRIPTION_LIST':
      console.log('UPDATE ELEMENT TRANSCRIPTION LIST REDUCER')
      console.log(data)
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === data.id) {
            const updatedElement = { ...el, [data.element]: data.content }
            return updatedElement
          }
          return el
        }),
        // Here i have to update only the element with id
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

    default:
      return state
  }
}
