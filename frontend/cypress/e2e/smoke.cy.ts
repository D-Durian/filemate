/// <reference types="cypress" />
describe('smoke', () => {
  it('loads home page and increments counter', () => {
    cy.visit('/');
    cy.contains('filemate - React + Vite').should('be.visible');
    cy.contains('Zähler: 0').should('be.visible');
    cy.contains('+1').click();
    cy.contains('Zähler: 1').should('be.visible');
  });
});