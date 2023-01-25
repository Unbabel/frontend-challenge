import { shallowMount } from "@vue/test-utils";
import Icon from "@/components/Icon/Icon.vue";

describe("Icon.vue", () => {
  //Check if component renders
  //Check if it has icon rendered
  let wrapper;
  it("Component renders", () => {
    wrapper = shallowMount(Icon);
    expect(wrapper.exists()).toBe(true);
  });
  it("Passed icon is rendered", () => {
    const iconName = "person";
    wrapper = shallowMount(Icon, {
      propsData: { name: iconName },
    });
    expect(wrapper.find(".qa-icon").props('name')).toMatch(iconName);
  });
});
