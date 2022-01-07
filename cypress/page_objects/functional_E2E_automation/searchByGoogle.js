/// <reference types="cypress" />

export class SearchByGoogle {
    inputSearch(info) {
       cy.get('input[name="q"]').type(info); 
    }

    resultsOfsearch() {
        cy.get('h3').should(($results) => {
            expect($results).to.contain('PXR Legal: Home')
            expect($results).to.contain('PXR | LinkedIn')
            expect($results).to.contain('PXR Legal Rechtsanwaltsgesellschaft mbH - Berlin')
            expect($results).to.contain('PXR Legal Rechtsanwaltsgesellschaft mbH, Berlin - North Data')
            expect($results).to.contain('PXR Legal Rechtsanwaltsgesellschaft mbH - Berlin')
            expect($results).to.contain('PXR - azur')
            expect($results).to.contain('PXR Legal Rechtsanwaltsgesellschaft mbH - Firmenwissen')
        });
    }
}
export const search = new SearchByGoogle();