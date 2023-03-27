import {afterAll, afterEach, beforeAll, describe, expect, it} from "vitest";
import {cleanup, render, RenderResult} from "@testing-library/vue";
import LoaderComponent from "../loader-component.vue";

describe('Loader component tests', () => {

    let component: RenderResult;

    beforeAll(() => {
        component = render(LoaderComponent);
    });

    it('Loader should be visible if showLoader prop is set to true', async () => {

        await component.rerender({
            showLoader: true
        });

        const loader = component.getByTestId('loader');
        expect(loader).not.toBeUndefined();
        expect(loader.children.length).toBeGreaterThan(0);

    });

    it('Loader should not be visible if showLoader prop is set to false', async () => {

        await component.rerender({
            showLoader: false
        });

        expect(component.container.children.length).toEqual(0);
    });

    afterEach(() => {
        component.unmount();
    });

    afterAll(() => {
        cleanup();
    });

});
