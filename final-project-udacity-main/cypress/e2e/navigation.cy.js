describe('Navigation Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234'); 
      
    });
  
    it('navigates to Home page', () => {
      cy.get('[data-cy="nav-home"]').click();
      cy.url().should('include', '/home');
    });
  
    it('navigates to About page', () => {
      cy.get('[data-cy="nav-about"]').click();
      cy.url().should('include', '/about');
    });
  
    it('navigates to Create Set page', () => {
      cy.get('[data-cy="nav-create"]').click();
      cy.url().should('include', '/create-set');
    });
  });
  