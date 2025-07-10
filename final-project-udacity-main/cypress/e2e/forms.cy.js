describe('Create Set Form Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
    cy.get('[data-cy="nav-create"]').click();

  
    cy.get('[data-cy="set_form"]').invoke('removeClass', 'notVisible');
  });

  it('shows error if empty form is submitted', () => {
    cy.get('[data-cy="create-set-submit"]').click();
    cy.get('[data-cy="form-error"]').should('be.visible');
  });
});
