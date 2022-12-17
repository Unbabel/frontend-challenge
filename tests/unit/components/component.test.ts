import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TemplateHeader from '@/components/layout/TemplateHeader.vue'

describe('TemplateHeader.vue', () => {
  it('should render', () => {
    const wrapper = mount(TemplateHeader)
    expect(wrapper.text()).toContain('Transcriptions')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have title and buttons', async () => {
    const wrapper = mount(TemplateHeader)

    expect(wrapper.find('.template-header__title').exists()).toBe(true)
    expect(wrapper.find('.template-header__buttons').exists()).toBe(true)
    expect(wrapper.findAll('.template-header__buttons .button').length).toBe(2)
  })
})
