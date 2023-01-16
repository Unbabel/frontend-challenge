import Footer from '@/components/Footer.vue'
import { fireEvent } from '@testing-library/dom'
import { renderComponent } from '../utils'

describe('Footer', () => {
    it('loads successfully', () => {
        const { getByTestId } = renderComponent(Footer)

        getByTestId('toggle-theme')
    })

    it('toggles dark mode', () => {
        const { getByTestId } = renderComponent(Footer)

        fireEvent.click(getByTestId('toggle-theme'))
        expect(document.body.classList.contains('dark')).toBe(true)
    })
})
