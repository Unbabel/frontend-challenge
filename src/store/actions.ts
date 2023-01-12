import axios from 'axios'

const baseURL = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c'

const actions = {
    fetchNotes({ commit }: any): void {
        commit('setLoading', true)
        axios.get(baseURL)
            .then(response => {
                commit('setNotes', response.data)
            })
            .catch(error => {
                console.log('Error fetching notes', error)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    }
}

export default actions