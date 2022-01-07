/// <reference types="cypress" />

export class Navigation {
    googleSearch() {
        cy.visit('https://www.google.de/');
        cy.contains('Ich stimme zu').click();
    }
}
export const navigation = new Navigation();