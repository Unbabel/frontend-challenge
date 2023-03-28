import {describe, it, expect} from "vitest";
import Messages from "../messages";
describe('Language resource messages tests', () => {

    it('Message should contain translation keys for EN', () => {
        expect(Messages).toEqual(expect.objectContaining({
            en: {
                navbar: {
                    title: expect.any(String),
                    route: expect.any(Object),
                    optionButton: expect.any(Object)
                },
                transcriptionView: {
                    greeting: expect.any(String)
                },
                transcriptionIcon: {
                    inputTitlePlaceholder: expect.any(String),
                    inputTextPlaceholder: expect.any(String),
                }
            }
        }));
    });

    it('Message navbar route should contain translations for Home and About page', () => {
        expect(Messages.en.navbar.route).toEqual(expect.objectContaining({
            home: expect.any(String),
            about: expect.any(String),
        }));
    });

    it('Message navbar option buttons should contain translations for Upload and Download buttons title', () => {
        expect(Messages.en.navbar.optionButton).toEqual(expect.objectContaining({
            upload: { title: expect.any(String)},
            download: { title: expect.any(String)}
        }));
    });

});
