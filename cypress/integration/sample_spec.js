describe('My First Test', () => {
  it('Visits the home page', () => {
    cy.visit('http://localhost:3000');

    cy.get("#menuButton").click();
    cy.contains("Login").click();
  })
})
