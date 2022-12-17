// https://docs.cypress.io/api/introduction/api.html

describe('Check title', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('visits the app root url', () => {
    cy.contains('h1', 'Transcriptions')
  })
})
