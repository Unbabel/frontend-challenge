describe('Transcriptions Component Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // This test checks if the main TranscriptionsComponent is correctly loaded and visible on the page.
  it('loads the main Transcriptions component', () => {
    cy.get('.transcriptions').should('be.visible');
  });

  // This test verifies the functionality of adding a new item to the list. It simulates a user action of clicking the "Add" button and checks if an item is successfully added.
  it('allows adding a new item', () => {
    cy.get('.items__button--add').click();
    cy.get('.items__item').should('have.length', 1);
  });

  // This test ensures that items can be deleted from the list. It checks that after adding an item, it can then be removed, leaving the list empty.
  it('enables item deletion', () => {
    cy.get('.items__button--add').click();
    cy.get('.items-item__button--delete').first().click({ force: true });
    cy.get('.items__item').should('have.length', 0);
  });
  
  // This test aims to verify that data upload functionality works as intended. By simulating a click on the upload button, it should trigger any associated upload processes.
  it('uploads data successfully', () => {
    cy.get('.header__button--upload').click();
  });
  
  // Similar to the upload test, this one checks the functionality of fetching data, ensuring that the appropriate action is triggered when the "Get Data" button is clicked.
  // Fetches the data from the mock API, verifies that the response status is 200, clicks the "Get Data" button, and then verifies that the number of items displayed in the UI matches the number of items fetched from the API.
  it('fetches items successfully and displays them', () => {
    cy.request('https://65c568dfe5b94dfca2e00221.mockapi.io/fe-challenge').then((response) => {
      expect(response.status).to.eq(200);
      const expectedItemCount = response.body.length;
      cy.get('.header__button--fetch').click();
      cy.get('.items__item').should('have.length', expectedItemCount);
    });
  });
});
