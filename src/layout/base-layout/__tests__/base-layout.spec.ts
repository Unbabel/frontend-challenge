import {afterAll, beforeAll, describe, expect, it} from "vitest";
import {cleanup, render, RenderResult} from "@testing-library/vue";
import BaseLayout from '../BaseLayout.vue';

describe('Base layout tests', () => {

    let layout: RenderResult;

    beforeAll(() => {
        layout = render(BaseLayout);
    });

    it('Base layout structure should render properly', () => {

        const baseLayout = layout.getByTestId('base_layout');
        const baseLayoutHeader = layout.getByTestId('base_layout__header');
        const baseLayoutMain = layout.getByTestId('base_layout__main');
        const baseLayoutFooter = layout.getByTestId('base_layout__footer');

        expect(baseLayout).not.toBeUndefined();
        expect(baseLayoutHeader).not.toBeUndefined();
        expect(baseLayoutMain).not.toBeUndefined();
        expect(baseLayoutFooter).not.toBeUndefined();

        expect(baseLayout.children.length).toEqual(3);
    });

    afterAll(() => {
        layout.unmount();
        cleanup();
    });

});
