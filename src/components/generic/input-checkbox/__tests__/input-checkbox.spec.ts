import {afterAll, beforeAll, describe, expect, it, vi} from "vitest";
import {cleanup, fireEvent, render, RenderResult} from "@testing-library/vue";
import {faker} from "@faker-js/faker";
import InputCheckboxComponent from '../input-checkbox-component.vue';

describe('Checkbox component tests', () => {

    let component: RenderResult;

    beforeAll(() => {
        component = render(InputCheckboxComponent);
    });

    it('Checkbox should not be rendered if no ID is provided', () => {
        expect(component.container.children.length).toEqual(0);
    });

    it('Checkbox should render properly if ID is provided', async () => {
        const id = faker.random.words(1);
        const label = faker.random.words(2);

        await component.rerender({
            checkBoxID: id,
            checkBoxLabel: label
        });

        const checkBox = component.getByTestId('checkbox');
        const checkBoxLabel = component.getByTestId('checkbox__label');
        const checkBoxInput = component.getByTestId('checkbox__input');

        expect(checkBox).not.toBeUndefined();
        expect(checkBoxLabel).not.toBeUndefined();
        expect(checkBoxInput).not.toBeUndefined();

        expect(checkBox.children.length).toBeGreaterThan(0);
        expect(checkBoxLabel.textContent).toEqual(label);
        expect(checkBoxInput.id).toEqual(id);

    });

    it('Checkbox should handle change event', async () => {

        const customCheckboxChangeHandler = vi.fn((payload: boolean): void => {
            expect(payload).toBeTruthy();
        });

        await component.rerender({
            textAreaID: faker.random.words(1),
            changeHandler: customCheckboxChangeHandler
        });

        const checkBoxInput = component.getByTestId('checkbox__input');
        expect(checkBoxInput).not.toBeUndefined();

        await fireEvent.click(checkBoxInput);
        expect(customCheckboxChangeHandler).toHaveBeenCalledOnce();

    });

    afterAll(() => {
        component.unmount();
        cleanup();
    });
});
