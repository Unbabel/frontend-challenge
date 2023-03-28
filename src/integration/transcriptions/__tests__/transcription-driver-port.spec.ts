import {describe, it, vi, expect} from "vitest";
import Transcriptions from "../index";
import {faker} from "@faker-js/faker";
import type {TranscriptionDTO} from "../business/dto/transcription.dto";
import type {TranscriptionDrivenReaderPort} from "../ports/transcription-driven-reader.port";
import type {TranscriptionDrivenWriterPort} from "../ports/transcription-driven-writer.port";
import type {TranscriptionResponseServiceDTO} from "../business/dto/transcription-response-service.dto";
import type {TranscriptionRequestServiceDTO} from "../business/dto/transcription-request-service.dto";
import {TranscriptionService} from "../transcription.service";
import {TranscriptionResourceConstants} from "../business/constants/transcription-resource.constants";

describe('Transcription integration service tests', () => {

    const timeout:number = 60 * 1000;

    it('getAllTranscriptions should return a collection of TranscriptionDTO', async () => {

        const spy = vi.spyOn(Transcriptions, 'getAllTranscriptions');
        const result = await Transcriptions.getAllTranscriptions();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith();
        expect(result.length).toBeGreaterThan(0);

        expect(result).toEqual(expect.arrayContaining(<TranscriptionDTO[]>[
            expect.objectContaining(<TranscriptionDTO>{
                id: expect.any(Number),
                voice: expect.any(String),
                text: expect.any(String),
                isNew: expect.any(Boolean),
            })
        ]));

        for (const transcription of result) {
            expect(transcription.id).toBeGreaterThan(0);
            expect(transcription.isNew).toBeFalsy();
        }

    }, timeout);

    it('Empty transcription dto collection should be returned if no data is obtained from the data provider', async () => {

        const fakeReaderAdapter: TranscriptionDrivenReaderPort = {
          get: (resource: string): Promise<TranscriptionResponseServiceDTO[]>  => {

              expect(resource).toEqual(TranscriptionResourceConstants.TRANSCRIPTIONS);
              return Promise.resolve([]);
          }
        };

        const fakeWriterAdapter: TranscriptionDrivenWriterPort = {
            write: (resource: string, payload: TranscriptionRequestServiceDTO): Promise<void> => { return Promise.resolve(); }
        };

        const transcriptionService = TranscriptionService(fakeReaderAdapter, fakeWriterAdapter);
        const spy = vi.spyOn(transcriptionService, 'getAllTranscriptions');
        const spyFakeReaderAdapter = vi.spyOn(fakeReaderAdapter, 'get');

        const result = await transcriptionService.getAllTranscriptions();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith();
        expect(result.length).toEqual(0);

        expect(spyFakeReaderAdapter).toHaveBeenCalled();
        expect(spyFakeReaderAdapter).toHaveBeenCalledOnce();
        expect(spyFakeReaderAdapter).toHaveBeenCalledWith(TranscriptionResourceConstants.TRANSCRIPTIONS);

    });

    it('uploadTranscriptions should send a collection of TranscriptionDTO', async () => {

        const fakeTranscriptions: TranscriptionDTO[] = [
            {
                id: parseInt(faker.random.numeric(3)),
                voice: faker.random.word(),
                text: faker.random.words(5),
                isNew: faker.datatype.boolean()
            },
            {
                id: parseInt(faker.random.numeric(3)),
                voice: faker.random.word(),
                text: faker.random.words(5),
                isNew: faker.datatype.boolean()
            }
        ];

        const spy = vi.spyOn(Transcriptions, 'uploadTranscriptions');
        const result = await Transcriptions.uploadTranscriptions(fakeTranscriptions);

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(fakeTranscriptions);
        expect(result).toBeUndefined();

    }, timeout );

});
