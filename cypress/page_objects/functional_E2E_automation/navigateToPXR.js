/// <reference types="cypress" />

export class NavigateToPxr {
    careersLink() {
        cy.contains('Careers').click();
        cy.url().should('eq', 'https://pxr-legal.com/en/careers');
    }

    findBlock_openPositions(block) {
        cy.get('div[data-ui-name="job-openings"]').find('.mt-800').eq(block);
    }

    blockTech() {
        cy.get('[data-ui-name="job-openings"] > .mt-800 > ul > li').should(($openCareers) => {
            expect($openCareers.eq(0)).to.contain('Legal Engineer')
            expect($openCareers.eq(1)).to.contain('Product Designer UX/UI')
            expect($openCareers.eq(2)).to.contain('Product Owner')
            expect($openCareers.eq(3)).to.contain('Intern UX/UI-Design')
            expect($openCareers.eq(4)).to.contain('Senior Frontend Engineer (f/m/d)')
            expect($openCareers.eq(5)).to.contain('Backend Engineer')
            expect($openCareers.eq(6)).to.contain('Technical Writer')
            expect($openCareers.eq(7)).to.contain('DevOps Engineer')
            expect($openCareers.eq(8)).to.contain('QA Engineer')
            expect($openCareers.eq(9)).to.contain('Database Engineer')
            expect($openCareers.eq(10)).to.contain('Junior Frontend Engineer')
            expect($openCareers.eq(11)).to.contain('DevOps Engineer (f/d/m) Legal Tech Startup')
            expect($openCareers.eq(12)).to.contain('QA Engineer / Test Engineer (f/d/m) Legal Tech Startup')
        });     
    }

    check_openPosition() {
        cy.get('div.mt-800 ').eq(0).should('have.contain', 'QA Engineer');
    }    
}
export const navigateToPxr = new NavigateToPxr();