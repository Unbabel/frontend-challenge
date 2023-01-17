import { State } from "@/interfaces"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
import { waitFor } from "@testing-library/dom"
import axios from "axios"
import { MockedFunction } from "vitest"
import { createStore } from "vuex"
import { stateMock } from "../__mocks__"

vi.mock('axios')
vi.spyOn(mutations, 'setNotes')
vi.spyOn(mutations, 'setToast')

const axiosMock = axios as unknown as MockedFunction<typeof axios>
const store = createStore<State>({ state: stateMock, mutations, actions })

describe('actions', async () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })

    describe('fetchNotes', () => {
        it('fetches notes from API', async () => {
            axiosMock.mockResolvedValue({ data: stateMock.notes })
            store.dispatch('fetchNotes')

            await waitFor(() => {
                expect(axiosMock).toHaveBeenCalledWith(expect.objectContaining({ method: 'get' }))
                expect(mutations.setNotes).toHaveBeenCalled()
            })
        })

        it('sets toast data on fetch error', async () => {
            axiosMock.mockRejectedValue(new Error())
            store.dispatch('fetchNotes')

            await waitFor(() => {
                expect(axiosMock).toHaveBeenCalledWith(expect.objectContaining({ method: 'get' }))
                expect(mutations.setToast).toHaveBeenCalled()
            })
        })
    })

    describe('uploadNotes', () => {
        it('uploads notes to API', async () => {
            axiosMock.mockResolvedValue({ status: 200 })
            store.dispatch('uploadNotes')

            await waitFor(() => {
                expect(axiosMock).toHaveBeenCalledWith(expect.objectContaining({ method: 'post' }))
                expect(mutations.setToast).toHaveBeenCalled()
            })
        })

        it('sets toast data on upload error', async () => {
            axiosMock.mockRejectedValue(new Error())
            store.dispatch('uploadNotes')

            await waitFor(() => {
                expect(axiosMock).toHaveBeenCalledWith(expect.objectContaining({ method: 'post' }))
                expect(mutations.setToast).toHaveBeenCalled()
            })
        })
    })
})