import Toast from '@/components/custom/Toast.vue'
import { State } from '@/interfaces'
import { RenderResult, waitFor } from '@testing-library/vue'
import { createStore } from 'vuex'
import { renderComponent } from './utils'

describe('Toast', () => {
    it('is closed if no message', () => {
        const { getByTestId } = renderToast({
            toast: { status: 'none', message: '' }
        })
        waitFor(() => {
            expect(getByTestId('toast').hasAttribute('open')).toBe(false)
        })
    })

    it('opens if has message', () => {
        const { getByTestId } = renderToast({
            toast: { status: 'success', message: 'toast' }
        })
        waitFor(() => {
            expect(getByTestId('toast').hasAttribute('open')).toBe(true)
        })
    })

    it('closes 2 seconds after opening', () => {
        const { getByTestId } = renderToast({
            toast: { status: 'success', message: 'toast' }
        })
        waitFor(() => {
            expect(getByTestId('toast').hasAttribute('open')).toBe(false)
        }, { timeout: 2000 })
    })
})

const renderToast = (state: any): RenderResult => {
    const store = createStore<State>({ state })
    return renderComponent(Toast, store)
}