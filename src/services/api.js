import axios from 'axios'

export async function postTranscriptions(transcriptions) {
  try {
    const response = await axios.post('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c', { data: transcriptions })
    return response.data
  } catch (error) {
    console.log(error)
  }
}


export async function fetchTranscriptions() {
  try {
    const response = await axios.get('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
