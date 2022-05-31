
/* eslint-disable no-undef */
describe('Home Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Should list hotels', () => {
    cy.get('[data-testid="hotel-placeholder-item"]').should(($lis) => {
      expect($lis).to.have.length(8);
    });

    cy.wait(1500);

    cy.get('[data-testid="hotel-item"]').should(($lis) => {
      expect($lis).to.have.length(10);
    });
  });
})