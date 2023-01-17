import { RenderResult } from '@testing-library/vue'
import Note from "@/components/Note.vue"
import { createStore } from 'vuex'
import { State } from '@/interfaces'
import { renderComponent } from '../utils'
import { fireEvent, waitFor } from '@testing-library/dom'
import { noteMock } from '../__mocks__'

describe('Note', () => {
    it('loads successfully', () => {
        const { getByTestId } = renderNote()

        getByTestId('note')
    })

    it('has a checkbox', () => {
        const { getByTestId } = renderNote()

        getByTestId('checkbox')
    })

    it('updates the title', async () => {
        const mutations = { updateNote: vi.fn() }
        const spy = vi.spyOn(mutations, 'updateNote')
        const { getByText, getByTestId } = renderNote(mutations)

        getByText('voice')

        fireEvent.input(getByTestId('note-title'), { target: { innerText: 'title' } })

        await waitFor(() => {
            getByText('title')
            expect(spy).toHaveBeenCalled()
        })
    })

    it('updates the content', async () => {
        const mutations = { updateNote: vi.fn() }
        const spy = vi.spyOn(mutations, 'updateNote')
        const { getByText, getByTestId } = renderNote(mutations)

        getByText('text')

        fireEvent.input(getByTestId('note-content'), { target: { innerText: 'content' } })

        await waitFor(() => {
            getByText('content')
            expect(spy).toHaveBeenCalled()
        })
    })

    it('deletes the note', () => {
        const mutations = { deleteNote: vi.fn() }
        const { getByTestId } = renderNote(mutations)

        fireEvent.click(getByTestId('delete-button'))
        expect(mutations.deleteNote).toHaveBeenCalled()
    })
})

const renderNote = (mutations?: any): RenderResult => {
    const store = createStore<State>({ mutations })
    const props = { data: noteMock }
    return renderComponent(Note, store, props)
}