import axios, { AxiosError, AxiosResponse } from 'axios'
import { ActionContext, Commit } from 'vuex'
import { NotesRequest, State } from '@/interfaces'

const baseURL = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c'

const apiRequest = (request: NotesRequest, commit: Commit) => {
    const { method, data } = request
    commit('setLoading', true)
    axios({ baseURL, method, data })
        .then(response => request.handleSuccess(response))
        .catch(error => request.handleError(error))
        .finally(() => commit('setLoading', false))
}

const actions = {
    fetchNotes({ commit }: ActionContext<State, State>): void {
        apiRequest({
            method: 'get',
            handleSuccess: (response: AxiosResponse) => { 
                commit('setNotes', response.data)
            },
            handleError: (error: AxiosError) => { 
                commit('setToast', { status: 'error', message: 'fetch-error' })
                console.debug('Error fetching notes', error)
            }
        }, commit)
    },
    uploadNotes({ commit, state }: ActionContext<State, State>): void {
        apiRequest({
            method: 'post',
            data: state.notes,
            handleSuccess: () => {
                commit('setToast', { status: 'success', message: 'upload-success' })
            },
            handleError: (error: AxiosError) => {
                commit('setToast', { status: 'error', message: 'upload-error' })
                console.debug('Error uploading notes', error)
            }
        }, commit)
    }
}

export default actions