describe('Navigation Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234'); 
  });

  it('navigates to Home page', () => {
    cy.get('[data-cy="nav-home"]').click();
    cy.get('main').should('contain', 'Study Night'); 
  });

it('navigates to About page', () => {
  cy.get('[data-cy="nav-about"]').click();
  cy.get('[data-cy="about_page"]').should('contain', 'About Study Night');
});

it('navigates to Create Set page', () => {
  cy.get('[data-cy="nav-create"]').click();
  cy.get('[data-cy="card-sets-page"]').should('exist');
});

});
