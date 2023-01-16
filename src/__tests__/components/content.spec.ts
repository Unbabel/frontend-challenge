import { RenderResult } from '@testing-library/vue'
import Content from "@/components/Content.vue"
import { createStore } from 'vuex'
import { fireEvent } from '@testing-library/dom'
import { State } from '@/interfaces'
import { renderComponent } from '../utils'

describe('Content', () => {
    let state: Partial<State>

    beforeEach(() => {
        state = { notes: [] }
    })

    it('loads successfully', () => {
        const { getByTestId } = renderContent(state)
    
        getByTestId('content')
    })

    it('hides an empty list', () => {
        const { queryByTestId } = renderContent(state)
    
        expect(queryByTestId('list')).toBeNull()
    })

    it('shows a list with items', () => {
        state.notes?.push({ id: 1, voice: "voice", text: 'text' })
        const { getByTestId } = renderContent(state)

        getByTestId('list')
    })

    it('adds a note the list', () => {
        const mutations = { addNote: vi.fn() }
        const { getByTestId } = renderContent(state, mutations)

        fireEvent.click(getByTestId('add-button'))
        expect(mutations.addNote).toHaveBeenCalled()
    })
})

const renderContent = (state: any, mutations?: any): RenderResult => {
    const store = createStore<State>({ state, mutations })
    return renderComponent(Content, store)
}