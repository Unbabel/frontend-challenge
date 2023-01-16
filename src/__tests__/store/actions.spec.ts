import { State } from "@/interfaces"
import actions from "@/store/actions"
import { waitFor } from "@testing-library/dom"
import axios from "axios"
import { ActionContext } from "vuex"

const mockNotes = {
    data: [
        { id: 1, voice: 'Voice 1', text: 'Text 1' },
        { id: 2, voice: 'Voice 2', text: 'Text 2' },
    ]
}

describe('actions', () => {
    it('fetches notes from API', () => {
        const { fetchNotes } = actions
        const context = { commit: vi.fn() } as unknown as ActionContext<State, State>

        vi.spyOn(axios, 'get').mockResolvedValue(mockNotes)
        fetchNotes(context)

        waitFor(() => {
            expect(context.commit).toHaveBeenCalledWith('setNotes', mockNotes.data)
        })
    })

    it('sets toast data on fetch error', () => {
        const { fetchNotes } = actions
        const context = { commit: vi.fn() } as unknown as ActionContext<State, State>
        const errorToast = { status: 'error', message: 'fetch-error' }

        vi.spyOn(axios, 'get').mockRejectedValue(new Error('error'))
        fetchNotes(context)

        waitFor(() => {
            expect(context.commit).toHaveBeenCalledWith('setToast', errorToast)
        })
    })

    it('uploads notes to API', async () => {
        const { uploadNotes } = actions
        const context = { 
            commit: vi.fn(),
            state: { notes: mockNotes }
        } as unknown as ActionContext<State, State>
        const successToast = { status: 'success', message: 'upload-success' }

        vi.spyOn(axios, 'post').mockResolvedValue({ status: 200 })
        uploadNotes(context)

        await waitFor(() => {
            expect(context.commit).toHaveBeenCalledWith('setToast', successToast)
        })
    })

    it('sets toast data on upload error', () => {
        const { uploadNotes } = actions
        const context = { 
            commit: vi.fn(),
            state: { notes: mockNotes }
        } as unknown as ActionContext<State, State>
        const errorToast = { status: 'error', message: 'upload-error' }

        vi.spyOn(axios, 'post').mockRejectedValue(new Error('error'))
        uploadNotes(context)

        waitFor(() => {
            expect(context.commit).toHaveBeenCalledWith('setToast', errorToast)
        })
    })
})