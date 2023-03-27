import {afterAll, beforeAll, describe, expect, it, vi} from "vitest";
import {cleanup, fireEvent, render, RenderResult} from "@testing-library/vue";
import {faker} from "@faker-js/faker";
import InputComponent from '../input-component.vue';


describe('Input component tests', () => {

    let component: RenderResult;

    beforeAll(() => {
        component = render(InputComponent);
    });

    it('Input should not be rendered if no ID is provided', () => {
        expect(component.container.children.length).toEqual(0);
    });

    it('Input should render properly if ID is provided', async () => {

        const inputId = faker.random.words(1);
        const inputLabel = faker.random.words(2);
        const inputPlaceHolder =  faker.random.words(4);

        await component.rerender({
            inputID: inputId,
            inputLabel: inputLabel,
            placeHolderText: inputPlaceHolder
        });

        const textInput = component.getByTestId('input__text');
        const inputTextLabel = component.getByTestId('input__text__label');
        const inputTextInput = component.getByTestId('input__text__input');

        expect(textInput).not.toBeUndefined();
        expect(inputTextLabel).not.toBeUndefined();
        expect(inputTextInput).not.toBeUndefined();

        expect(textInput.children.length).toBeGreaterThan(0);
        expect(inputTextLabel.textContent).toEqual(inputLabel);
        expect(inputTextInput.id).toEqual(inputId);
        // @ts-ignore
        expect(inputTextInput.placeholder).toEqual(inputPlaceHolder);

    });

    it('Input should handle input event', async () => {

        const payloadText = faker.random.words(2);

        const customInputChangeHandler = vi.fn((payload: string): void => {
            expect(payload).toEqual(payloadText);
        });

        await component.rerender({
            inputID: faker.random.words(1),
            changeHandler: customInputChangeHandler
        });

        const inputTextInput = component.getByTestId('input__text__input');
        expect(inputTextInput).not.toBeUndefined();

        await fireEvent.update(inputTextInput, payloadText);
        expect(customInputChangeHandler).toHaveBeenCalledOnce();

    });

    afterAll(() => {
        component.unmount();
        cleanup();
    });
});
