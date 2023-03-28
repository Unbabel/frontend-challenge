import {afterAll, beforeAll, describe, expect, it, vi} from "vitest";
import {cleanup, fireEvent, render, RenderResult} from "@testing-library/vue";
import {faker} from "@faker-js/faker";
import IconButtonComponent from '../icon-button-component.vue';

describe('IconButton component tests', () => {

    let component: RenderResult;

    beforeAll(() => {
        component = render(IconButtonComponent);
    });

    it('IconButton should not be rendered if no ID is provided', () => {
        expect(component.container.children.length).toEqual(0);
    });

    it('IconButton should rendered if ID is provided', async () => {

        const fakeButtonId = faker.random.word();

        await component.rerender({
            iconButtonID: fakeButtonId
        });

        const button = component.getByTestId('icon__button');
        const buttonIconPlaceholder = component.getByTestId('icon__button__no-image__placeholder');
        expect(button).not.toBeUndefined();
        expect(buttonIconPlaceholder).not.toBeUndefined();
        expect(button.id).toEqual(fakeButtonId);

    });

    it('IconButton should rendered with icon if ID and icon image url is provided', async () => {

        const fakeButtonId = faker.random.word();
        const fakeButtonIcon = faker.image.imageUrl(10,10);

        await component.rerender({
            iconButtonID: fakeButtonId,
            iconButtonIcon: fakeButtonIcon
        });

        const button = component.getByTestId('icon__button');
        const buttonIcon = component.getByTestId('icon__button__image');
        expect(button).not.toBeUndefined();
        expect(buttonIcon).not.toBeUndefined();
        expect(button.id).toEqual(fakeButtonId);

    });

    it('IconButton should handle click event', async () => {

        const fakeButtonId = faker.random.word();
        const customButtonClickHandler = vi.fn((): void => {});

        await component.rerender({
            iconButtonID: fakeButtonId,
            clickHandler: customButtonClickHandler
        });

        const button = component.getByTestId('icon__button');
        expect(button).not.toBeUndefined();

        await fireEvent.click(button);
        expect(customButtonClickHandler).toHaveBeenCalledOnce();

    });


    afterAll(() => {
        component.unmount();
        cleanup();
    });
});
