import {afterAll, beforeAll, describe, expect, it, vi} from "vitest";
import {cleanup, fireEvent, render, RenderResult} from "@testing-library/vue";
import {faker} from "@faker-js/faker";
import InputTextAreaComponent from '../input-text-area-component.vue';

describe('TextArea component tests', () => {

    let component: RenderResult;

    beforeAll(() => {
        component = render(InputTextAreaComponent);
    });

    it('TextArea should not be rendered if no ID is provided', () => {
        expect(component.container.children.length).toEqual(0);
    });

    it('TextArea should render properly if ID is provided', async () => {
        const id = faker.random.words(1);
        const label = faker.random.words(2);

        await component.rerender({
            textAreaID: id,
            textAreaLabel: label
        });

        const textArea = component.getByTestId('text__area');
        const textAreaLabel = component.getByTestId('text__area__label');
        const textAreaInput = component.getByTestId('text__area__input');

        expect(textArea).not.toBeUndefined();
        expect(textAreaLabel).not.toBeUndefined();
        expect(textAreaInput).not.toBeUndefined();

        expect(textArea.children.length).toBeGreaterThan(0);
        expect(textAreaLabel.textContent).toEqual(label);
        expect(textAreaInput.id).toEqual(id);
    });

    it('TextArea should handle change event', async () => {

        const payloadText = faker.random.words(10);

        const customTextAreaChangeHandler = vi.fn((payload: string): void => {
            expect(payload).toEqual(payloadText);
        });

        await component.rerender({
            textAreaID: faker.random.words(1),
            changeHandler: customTextAreaChangeHandler
        });

        const textAreaInput = component.getByTestId('text__area__input');
        expect(textAreaInput).not.toBeUndefined();

        await fireEvent.update(textAreaInput,payloadText);
        expect(customTextAreaChangeHandler).toHaveBeenCalledOnce();

    });

    afterAll(() => {
        component.unmount();
        cleanup();
    });

});
