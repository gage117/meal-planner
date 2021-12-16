describe('My First Test', () => {
  beforeEach(function () {
    cy.loginByAuth0Api(
      Cypress.env('auth0_username'),
      Cypress.env('auth0_password')
    )
  })

  it('Visits the home page', () => {
    cy.visit('/');

    cy.get("#menuButton").click();
  })
})
