/// <reference types="cypress" />

import {navigation} from '../../page_objects/functional_E2E_automation/navigation';
import {searchByGoogle}  from '../../page_objects/functional_E2E_automation/searchByGoogle';


describe('Navigation by links', () => {
    beforeEach(() => {  
        navigation.navigate();      
    })

    it('Should perform a search for "pxr legal" by google and search results displayed', () => {
        
    })
})
