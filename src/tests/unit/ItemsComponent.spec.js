import { mount } from '@vue/test-utils';
// Mocks an SVG import to simplify testing by replacing the actual SVG file with a simplified mock string, ensuring tests focus on component behavior
jest.mock('@/assets/person.svg', () => 'mocked-person-svg');
jest.mock('@/assets/delete.svg', () => 'mocked-delete-svg');
jest.mock('@/assets/add-row.svg', () => 'mocked-add-row-svg');
import ItemsComponent from '@/components/ItemsComponent.vue';

describe('ItemsComponent', () => {
    // Checks if component displays nothing when no items are provided.
    it('renders correctly with no items', () => {
      const wrapper = mount(ItemsComponent, {
        props: {
          items: [],
        },
      });
      expect(wrapper.findAll('.items__item').length).toBe(0); // Expects no item elements.
    });
  
    // Ensures items passed as props are rendered properly.
    it('renders correctly with items', () => {
      const items = [{ id: 1, voice: 'Test Voice 1', text: 'Test Text 1', checked: false }];
      const wrapper = mount(ItemsComponent, {
        props: {
          items,
        },
      });
      expect(wrapper.findAll('.items__item').length).toBe(items.length); // Checks for item count.
      expect(wrapper.text()).toContain(items[0].voice); // Verifies item content.
      expect(wrapper.text()).toContain(items[0].text); // Verifies item content.
    });

    // Tests if items can be checked/unchecked by user interaction.
    it('can check an item', async () => {
      const items = [{ id: 1, voice: 'Test Voice 1', text: 'Test Text 1', checked: false }];
      const wrapper = mount(ItemsComponent, {
        props: { items },
      });
      const checkbox = wrapper.find('.items-item__checkbox');
      await checkbox.setChecked(); // Simulates checkbox interaction.
    });

    // Confirms the delete function works by emitting the correct event.
    it('deletes an item correctly', async () => {
      const items = [{ id: 1, voice: 'Test Voice', text: 'Test Text', checked: false }];
      const wrapper = mount(ItemsComponent, {
        props: { items },
      });
      await wrapper.vm.deleteItem(1); // Triggers delete.
      expect(wrapper.emitted()).toHaveProperty('deleteItem'); // Checks for delete event emission.
      expect(wrapper.emitted().deleteItem[0]).toEqual([1]); // Ensures correct item id is emitted.
    });

    // Verifies the add button triggers a new item addition event.
    it('can add a new item', async () => {
      const wrapper = mount(ItemsComponent);
      await wrapper.find('.items__button--add').trigger('click'); // Simulates button click.
      expect(wrapper.emitted()).toHaveProperty('addNewItem'); // Checks for add event.
    });

    // Tests CSS transition hooks for entering and leaving animations.
    const mockElement = document.createElement('div');

    it('applies correct styles on beforeEnter', () => {
      const wrapper = mount(ItemsComponent);
      wrapper.vm.beforeEnter(mockElement); // Simulates beforeEnter hook.
      expect(mockElement.style.opacity).toBe('0'); // Checks initial opacity.
      expect(mockElement.style.transform).toBe('translateY(-20px)'); // Checks initial transform.
    });
    
    it('applies correct styles on enter', done => {
      const wrapper = mount(ItemsComponent);
      wrapper.vm.enter(mockElement, () => {
        expect(mockElement.style.opacity).toBe('1'); // Checks final opacity.
        expect(mockElement.style.transform).toBe('translateY(0)'); // Checks final transform.
        done();
      });
      mockElement.offsetHeight; // Forces the browser to recalculate the positions and geometries of elements on the page, which is necessary for the transition to take effect.
    });
    
    it('applies correct styles on leave', done => {
      const wrapper = mount(ItemsComponent);
      wrapper.vm.leave(mockElement, () => {
        expect(mockElement.style.opacity).toBe('0'); // Checks opacity after leaving.
        expect(mockElement.style.transform).toBe('translateY(-20px)'); // Checks transform after leaving.
        done();
      });
    });    
  });
