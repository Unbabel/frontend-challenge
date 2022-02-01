import { shallowMount } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table.vue', () => {

  test("sets new 'content' when 'value' changes", () => {
    const wrapper = shallowMount(Table);
    wrapper.vm.$options.watch.value.call(wrapper.vm, [1,2,3]);
    expect(wrapper.vm.content).toStrictEqual([1,2,3])
  });

  
})
