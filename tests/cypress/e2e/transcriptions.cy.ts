// https://docs.cypress.io/api/introduction/api.html

describe('Check transcriptions page functions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Visits the app root url', () => {
    cy.contains('h1', 'Transcriptions')
  })

  it('Check transcriptions', () => {
    cy.contains('[data-cy=transcriptions-list]', 'No transcriptions found')

    cy.intercept('GET', 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c').as('loadTranscriptions')
    cy.get('[data-cy=fetch-button]').click()
    cy.wait('@loadTranscriptions')

    cy.get('[data-cy=transcriptions-list]>ul').children().should('have.length.above', 0)
  })
})
