import { render } from '@testing-library/vue'
import Header from "@/components/Header.vue"

describe('Header', () => {
    it ('loads successfully', () => {
        const wrapper = render(Header, {
            global: { mocks: { $t: () => {} } }
        })
    
        wrapper.getByTestId('header-title')
    })
})