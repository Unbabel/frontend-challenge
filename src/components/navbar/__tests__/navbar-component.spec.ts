import {afterAll, beforeAll, describe, expect, it} from "vitest";
import {cleanup, render, RenderResult} from "@testing-library/vue";
import NavbarComponent from '../navbar-component.vue';

describe('Navbar component tests', () => {

    let component: RenderResult;

    beforeAll(() => {
        component = render(NavbarComponent);
    });

    it('Navbar should be render without route links', () => {

        const navbar = component.getByTestId('navbar');
        const navbarInnerContainer = component.getByTestId('navbar__inner__container');
        const navbarItemsContainer = component.getByTestId('navbar__items__container');
        const navbarLogoContainer = component.getByTestId('navbar__logo__container');
        const navbarButtonsContainer = component.getByTestId('navbar__buttons__container');
        const navbarLogo = component.getByTestId('navbar__logo');
        const navbarUploadButton = component.getByTestId('navbar__upload__button');
        const navbarDownloadButton = component.getByTestId('navbar__download__button');

        expect(navbar).not.toBeUndefined();
        expect(navbarInnerContainer).not.toBeUndefined();
        expect(navbarItemsContainer).not.toBeUndefined();
        expect(navbarLogoContainer).not.toBeUndefined();
        expect(navbarButtonsContainer).not.toBeUndefined();
        expect(navbarLogo).not.toBeUndefined();
        expect(navbarUploadButton).not.toBeUndefined();
        expect(navbarDownloadButton).not.toBeUndefined();

        expect(navbar.children.length).toBeGreaterThan(0);

        expect(navbarButtonsContainer.children.length).toBeGreaterThan(0);
        expect(navbarButtonsContainer.children.length).toEqual(2);

    });


    afterAll(() => {
        component.unmount();
        cleanup();
    });
});
