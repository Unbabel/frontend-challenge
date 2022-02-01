import { shallowMount } from '@vue/test-utils'
import LocaleSelector from '@/components/LocaleSelector.vue'
import { i18n } from '../utils.js'

describe('LocaleSelector.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LocaleSelector, { i18n });
  });

  test('change language', async () =>{
    const select = wrapper.find('select')
    await select.setValue('de')
    expect(wrapper.find('select').element.value).toBe('de')
    expect(i18n.locale).toBe('de')
  })
})
