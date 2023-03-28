import {afterAll, beforeAll, describe, expect, it} from "vitest";
import {cleanup, render, RenderResult} from "@testing-library/vue";
import {faker} from "@faker-js/faker";
import type {TranscriptionDTO} from "../../../integration/transcriptions/business/dto/transcription.dto";
import TranscriptionListComponent from '../transcription-list-component.vue';


describe('Transcription list component tests', () => {

    let component: RenderResult;

    beforeAll(() => {
        component = render(TranscriptionListComponent);
    });

    it('Transcription item should not be rendered if no TranscriptionDTO collection is provided', () => {
        expect(component.container.children.length).toEqual(0)
    });

    it('Transcription item should render ifTranscriptionDTO collection is provided', async () => {

        const fakeTranscriptions: TranscriptionDTO[] = [
            {
                id: parseInt(faker.random.numeric(1)),
                voice: faker.random.words(2),
                text: faker.lorem.paragraphs(1),
                isNew: faker.datatype.boolean()
            },
            {
                id: parseInt(faker.random.numeric(1)),
                voice: faker.random.words(2),
                text: faker.lorem.paragraphs(1),
                isNew: faker.datatype.boolean()
            }
        ];

        await component.rerender({
           transcriptions: fakeTranscriptions
        });

        const transcriptionList = component.getByTestId('transcription__list');
        const transcriptionItem = component.getAllByTestId('transcription__item');

        expect(transcriptionList).not.toBeUndefined();
        expect(transcriptionItem).not.toBeUndefined();

        expect(transcriptionList.children.length).toEqual(2);
    });

    afterAll(() => {
        component.unmount();
        cleanup();
    });
});
