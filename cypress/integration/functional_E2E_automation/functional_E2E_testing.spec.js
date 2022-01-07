/// <reference types="cypress" />

import {navigation} from '../../page_objects/functional_E2E_automation/navigation';
import {search}  from '../../page_objects/functional_E2E_automation/searchByGoogle';
import {navigateToPxr} from '../../page_objects/functional_E2E_automation/navigateToPXR';


describe('Task 1: Functional E2E Automation', () => {
    
    let tech = 0 ;
    
    before(() => {          
        navigation.googleSearch(); // open google.de     
    })

    it('Should perform a search for "pxr legal" by google and search results displayed', () => {
        search.inputSearch('pxr legal{enter}'); //search for "pxr legal" by google
        search.resultsOfsearch(); //search results displayed
        
    })
    it('Should navigate to pxr careers link and confirm 13 open positions in the tech section of the page and one of them is QA Engineer position', () => {        
        navigateToPxr.careersLink(); //navigate to pxr careers link
        navigateToPxr.findBlock_openPositions(tech); // searching a block with opened positions
        navigateToPxr.blockTech(); // confirm 13 open positions in the tech section
        navigateToPxr.check_openPosition(); // confirmed one of them is QA Engineer position
    })
})
