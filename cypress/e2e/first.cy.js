describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://example.com');
    cy.contains('Example Domain');
  });

  it('check the title', () => {
    cy.visit('http://example.com');
    cy.title().should('eq', 'Example Domain');
  });

  it('check the navigation links', () => {
    cy.visit('https://example.com');
    cy.get('a').should('have.length.at.least', 1);
    cy.contains('More information').should('have.attr', 'href', 'https://www.iana.org/domains/example');
  });
});