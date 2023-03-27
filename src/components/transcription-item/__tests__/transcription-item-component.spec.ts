import {afterAll, beforeAll, describe, expect, it} from "vitest";
import {cleanup, render, RenderResult} from "@testing-library/vue";
import {faker} from "@faker-js/faker";
import type {TranscriptionDTO} from "../../../integration/transcriptions/business/dto/transcription.dto";
import TranscriptionItemComponent from '../transcription-item-component.vue';

describe('Transcription item component tests', () => {

    let component: RenderResult;

    beforeAll(() => {
        component = render(TranscriptionItemComponent);
    });

    it('Transcription item should not be rendered if no TranscriptionDTO is provided', () => {
        expect(component.container.children.length).toEqual(0)
    });

    it('Transcription item should render properly if TranscriptionDTO is provided', async () => {

        const fakeTranscriptionItem: TranscriptionDTO = {
            id: parseInt(faker.random.numeric(1)),
            voice: faker.random.words(2),
            text: faker.lorem.paragraphs(1),
            isNew: faker.datatype.boolean(),
        };

        await component.rerender({
            transcription: fakeTranscriptionItem
        });

        const transcriptionItem = component.getByTestId('transcription__item');
        const transcriptionItemCheckbox = component.getByTestId('transcription__item__checkbox');
        const transcriptionItemIcon = component.getByTestId('transcription__item__icon');
        const transcriptionItemTitle = component.getByTestId('transcription__item_title');
        const transcriptionItemText = component.getByTestId('transcription__item_text');

        expect(transcriptionItem).not.toBeUndefined();
        expect(transcriptionItemCheckbox).not.toBeUndefined();
        expect(transcriptionItemIcon).not.toBeUndefined();
        expect(transcriptionItemTitle).not.toBeUndefined();
        expect(transcriptionItemText).not.toBeUndefined();

        const checkbox = component.getByTestId('checkbox');
        const checkboxInput = component.getByTestId('checkbox__input');
        const inputText = component.getByTestId('input__text');
        const inputTextInput = component.getByTestId('input__text__input');
        const textArea = component.getByTestId('text__area');
        const textAreaInput = component.getByTestId('text__area__input');

        expect(checkbox).not.toBeUndefined();
        expect(checkboxInput).not.toBeUndefined();
        expect(inputText).not.toBeUndefined();
        expect(inputTextInput).not.toBeUndefined();
        expect(textArea).not.toBeUndefined();
        expect(textAreaInput).not.toBeUndefined();

    });


    afterAll(() => {
        component.unmount();
        cleanup();
    });
});
