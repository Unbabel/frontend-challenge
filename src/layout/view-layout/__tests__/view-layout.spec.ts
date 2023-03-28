import {afterAll, beforeAll, describe, expect, it} from "vitest";
import {cleanup, render, RenderResult} from "@testing-library/vue";
import ViewLayout from '../ViewLayout.vue';

describe('View layout tests', () => {

    let layout: RenderResult;

    beforeAll(() => {
        layout = render(ViewLayout);
    });

    it('View layout structure should render properly', () => {

        const viewLayout = layout.getByTestId('view_layout');
        const viewLayoutContainer = layout.getByTestId('view_layout__container');

        expect(viewLayout).not.toBeUndefined();
        expect(viewLayoutContainer).not.toBeUndefined();

    });

    afterAll(() => {
        layout.unmount();
        cleanup();
    });
});
