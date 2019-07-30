/// <reference types="Cypress" />

const transcriptionsMock = require('../fixtures/transcriptions.json');

context('E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        delete win.fetch;
      },
    });

    cy.server();
    cy.route(
      'GET',
      'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
      'fixture:transcriptions.json'
    ).as('getTranscriptions');

    cy.route(
      'POST',
      'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
      'fixture:transcriptions.json'
    ).as('postTranscriptions');
  });

  it('Should download transcriptions', () => {
    cy.get('[data-testid="fetch"]').click();
    const items = cy.get('.grid-item');

    items.should('have.length', 3);

    items.each(($el, index) => {
      cy.wrap($el)
        .find('.voice')
        .should('have.text', transcriptionsMock[index].voice);
      cy.wrap($el)
        .find('.text')
        .should('have.text', transcriptionsMock[index].text);
    });
  });

  it('Should add transcriptions', () => {
    cy.get('[data-testid="fetch"]').click();
    cy.get('.grid-item').should('have.length', 3);
    cy.get('.add-row svg').click();
    cy.get('.grid-item').should('have.length', 4);
  });

  it('Should delete transcriptions', () => {
    cy.get('[data-testid="fetch"]').click();
    cy.get('.grid-item').should('have.length', 3);
    cy.get('.grid-item:first-child').trigger('mouseover');
    cy.get('.grid-item:first-child')
      .find('.delete')
      .click({ force: true });
    cy.get('.grid-item').should('have.length', 2);
  });

  it('Should edit transcriptions and upload them correctly', () => {
    cy.get('[data-testid="fetch"]').click();

    cy.get('.grid-item:first-child')
      .find('.voice')
      .click()
      .clear()
      .type('Voice Change 1');
    cy.get('.grid-item:first-child')
      .find('.text')
      .click()
      .clear()
      .type('Text Change 1');

    cy.get('[data-testid="upload"]').click();

    cy.wait('@postTranscriptions')
      .its('requestBody')
      .should('have.deep.members', [
        {
          id: 1,
          voice: 'Voice Change 1',
          text: 'Text Change 1',
        },
        {
          ...transcriptionsMock[1],
        },
        {
          ...transcriptionsMock[2],
        },
      ]);
  });
});
