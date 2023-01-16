import { RenderResult } from '@testing-library/vue'
import Note from "@/components/Note.vue"
import { createStore } from 'vuex'
import { State } from '@/interfaces'
import { renderComponent } from '../utils'
import { fireEvent, waitFor } from '@testing-library/dom'

describe('Note', () => {
    it('loads successfully', () => {
        const { getByTestId } = renderNote()

        getByTestId('note')
    })

    it('has a checkbox', () => {
        const { getByTestId } = renderNote()

        getByTestId('checkbox')
    })

    it('updates the title', () => {
        const mutations = { updateNote: vi.fn() }
        const spy = vi.spyOn(mutations, 'updateNote')
        const { getByText, getByTestId } = renderNote(mutations)

        getByText('voice')

        fireEvent.change(getByTestId('note-title'), { target: { textContent: 'test' } })

        getByText('test')
        
        waitFor(() => {
            expect(spy).toHaveBeenCalled()
        })
    })

    it('updates the content', () => {
        const mutations = { updateNote: vi.fn() }
        const spy = vi.spyOn(mutations, 'updateNote')
        const { getByText, getByTestId } = renderNote(mutations)

        getByText('text')

        fireEvent.change(getByTestId('note-content'), { target: { textContent: 'test' } })

        getByText('test')

        waitFor(() => {
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
    const props = {
        data: { id: 1, voice: 'voice', text: 'text' }
    }
    return renderComponent(Note, store, props)
}