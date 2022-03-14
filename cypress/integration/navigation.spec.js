describe('Navigation', () => {
  it('should navigate between pages', () => {
    cy.visit('http://localhost:3000/')

    // Dashobard
    cy.url().should('include', '/')
    cy.findByRole('heading', { name: /my orchards/i }).should('exist')

    // Trees
    cy.findByRole('menuitem', { name: /trees/i }).click()
    cy.url().should('include', '/trees')
    cy.findByRole('heading', { name: /all trees/i }).should('exist')

    // Settings
    cy.findByRole('menuitem', { name: /settings/i }).click()
    cy.url().should('include', '/settings')
    cy.findByRole('heading', { name: /settings page/i }).should('exist')
  })
})
