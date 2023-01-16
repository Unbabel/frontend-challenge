import { render, RenderResult } from '@testing-library/vue'
import Header from "@/components/Header.vue"
import { createStore } from 'vuex'
import { fireEvent } from '@testing-library/dom'
import { State } from '@/interfaces'
import { renderComponent } from '../utils'

describe('Header', () => {
    it('loads successfully', () => {
        const { getByTestId } = renderHeader()
    
        getByTestId('header-title')
    })

    it('fetches notes', () => {
        const actions = { fetchNotes: vi.fn() }
        const { getByTestId } = renderHeader(actions)

        fireEvent.click(getByTestId('fetch-button'))
        expect(actions.fetchNotes).toHaveBeenCalled()
    })

    it('uploads notes', () => {
        const actions = { uploadNotes: vi.fn() }
        const { getByTestId } = renderHeader(actions)

        fireEvent.click(getByTestId('upload-button'))
        expect(actions.uploadNotes).toHaveBeenCalled()
    })
})

const renderHeader = (actions?: any): RenderResult => {
    const store = createStore<State>({ actions })
    return renderComponent(Header, store)
}