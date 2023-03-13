import { mount } from '@vue/test-utils'
import AppIcon from '@/components/common/AppIcon'

describe('AppIcon.vue', () => {
    let wrapper

    beforeAll(() => {
            wrapper = mount(AppIcon, { propsData: {
            icon: ''
        }})
    })

    it('should render AppIcon.vue', () => {
        expect(wrapper.find('.app-icon').exists()).toBe(true)
    })

    it('should emit a click event', () => {
        const appIcon = wrapper.find('.app-icon')

        appIcon.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('execute-method')

    })
})
