describe('Create Set Form Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234/create-set'); 
    });
  
    it('shows error if empty form is submitted', () => {
      cy.get('[data-cy="create-set-submit"]').click();
      cy.get('[data-cy="form-error"]').should('be.visible');
    });
  });
  