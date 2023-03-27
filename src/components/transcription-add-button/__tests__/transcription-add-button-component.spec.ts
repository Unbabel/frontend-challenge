import {afterAll, beforeAll, describe, expect, it, vi} from "vitest";
import {cleanup, fireEvent, render, RenderResult} from "@testing-library/vue";
import {faker} from "@faker-js/faker";
import TranscriptionsAddComponent from '../transcription-add-button-component.vue';

describe('Transcription add button component tests', () => {

    let component: RenderResult;

    beforeAll(() => {
        component = render(TranscriptionsAddComponent);
    });

    it('Button should render properly', () => {

        const button = component.getByTestId('transcription__add__button');
        const buttonIconPlaceholder = component.getByTestId('icon__button__no-image__placeholder');

        expect(button).not.toBeUndefined();
        expect(buttonIconPlaceholder).not.toBeUndefined();

    });

    it('Button should handle click event', async () => {

        const fakeIconImageURL = faker.image.imageUrl(10,10);

        await component.rerender({
            transcriptionAddButtonIcon: fakeIconImageURL
        });

        const button = component.getByTestId('transcription__add__button');
        const buttonIconImage = component.getByTestId('icon__button__image');
        expect(button).not.toBeUndefined();
        expect(buttonIconImage).not.toBeUndefined();
    });


    it('Button should handle click event', async () => {

        const customButtonClickHandler = vi.fn((): void => {});

        await component.rerender({
            clickHandler: customButtonClickHandler
        });

        const button = component.getByTestId('transcription__add__button');
        expect(button).not.toBeUndefined();

        await fireEvent.click(button);
        expect(customButtonClickHandler).toHaveBeenCalledOnce();

    });


    afterAll(() => {
        component.unmount();
        cleanup();
    });
});
