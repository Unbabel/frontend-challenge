import { render, RenderResult } from '@testing-library/vue'
import Content from "@/components/Content.vue"
import { createStore, MutationTree } from 'vuex'
import { fireEvent } from '@testing-library/dom'
import { State } from '@/interfaces'

describe('Content', () => {
    let state: Partial<State>
    const mutations = { addNote: vi.fn() }

    beforeEach(() => {
        state = { notes: [] }
    })

    it('loads successfully', () => {
        const { getByTestId } = renderContent(state, mutations)
    
        getByTestId('content')
    })

    it('hides an empty list', () => {
        const { queryByTestId } = renderContent(state, mutations)
    
        expect(queryByTestId('list')).toBeNull()
    })

    it('shows a list with items', () => {
        state.notes?.push({ id: 1, voice: "voice", text: 'text' })
        const { getByTestId } = renderContent(state, mutations)

        getByTestId('list')
    })

    it('adds a note the list', () => {
        const { getByTestId } = renderContent(state, mutations)

        fireEvent.click(getByTestId('add-button'))
        expect(mutations.addNote).toHaveBeenCalled()
    })
})

const renderContent = (state: any, mutations: any): RenderResult => {
    const store = createStore<State>({ state, mutations })
    return render(Content, {
        global: {
            plugins: [ store ],
            mocks: { $t: () => {} }
        }
    })
}