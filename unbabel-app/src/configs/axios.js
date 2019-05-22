import Axios from 'axios'

const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axios
