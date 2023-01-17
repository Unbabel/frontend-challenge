import Toast from '@/components/custom/Toast.vue'
import { State } from '@/interfaces'
import { RenderResult, waitFor } from '@testing-library/vue'
import { createStore, Store } from 'vuex'
import { renderComponent } from '../utils'

let store: Store<State>

describe('Toast', () => {
    beforeAll(() => {
        HTMLDialogElement.prototype.showModal = vi.fn();
        HTMLDialogElement.prototype.close = vi.fn();
    })

    it('is closed if no message', async () => {
        const { getByTestId } = renderToast()
        const toast = getByTestId('toast') as HTMLDialogElement

        await waitFor(() => {
            expect(toast.showModal).not.toHaveBeenCalled()
        })
    })

    it('opens if has message', async () => {
        const { getByTestId } = renderToast()
        const toast = getByTestId('toast') as HTMLDialogElement
        store.state.toast = { status: 'success', message: 'test' }

        await waitFor(() => {
            expect(toast.showModal).toHaveBeenCalled()
        })
    })

    it('closes after opening', async () => {
        const { getByTestId } = renderToast()
        const toast = getByTestId('toast') as HTMLDialogElement
        store.state.toast = { status: 'success', message: 'test' }

        await waitFor(() => {
            expect(toast.close).toHaveBeenCalled()
        }, { timeout: 3000 })
    })
})

const renderToast = (): RenderResult => {
    store = createStore<State>({
        state: { toast: { status: 'none', message: '' } } as State
    })
    return renderComponent(Toast, store)
}