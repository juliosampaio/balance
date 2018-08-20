describe('Balance feature', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should show the UI items when page load', () => {
    cy.get('.logo').should('be.visible');
    cy.get('.balance').should('be.visible');
    cy.get('.year').should('be.visible');
    cy.get('.greeting').should('be.visible');

    cy.get('#left').should('exist');
    cy.get('#center').should('exist');
    cy.get('#right').should('exist');

    cy.get('[href="#left"]').should('be.visible');
    cy.get('[href="#center"]').should('be.visible');
    cy.get('[href="#right"]').should('be.visible');
  });

  it('should navigate the carousel forward', () => {
    cy.get('#center').should('have.class', 'active');
    cy.get('[href="#right"]').click();
    cy.get('#center').should('not.have.class', 'active');
    cy.get('#center').should('have.class', 'previous');
    cy.get('#right').should('have.class', 'active');
  });

  it('should navigate the carousel backward', () => {
    cy.get('#center').should('have.class', 'active');
    cy.get('[href="#left"]').click();
    cy.get('#center').should('not.have.class', 'active');
    cy.get('#center').should('have.class', 'next');
    cy.get('#left').should('have.class', 'active');
  });

  it('should delete transactions when user clicks the delete button', () => {
    cy.get('#item-1').should('be.visible');
    cy.get('#item-1 button').click();
    cy.get('#item-1').should('not.exist');
  });
});
