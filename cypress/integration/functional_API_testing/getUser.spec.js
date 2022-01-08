/// <reference types="cypress" />

import {request} from '../../page_objects/functional_API_testing/requests';

describe('Task 2: Functional API testing', () => {     
    let body;

    it('Should be got a random user "ID" print out its email address to console', () => { 
        request.jsonplaceholderUser().then(response => {
            body = JSON.parse(JSON.stringify(response.body, ['id'])); 
            expect(body[0]).has.property("id", 1); // Get a random user

            body = JSON.parse(JSON.stringify(response.body, ['email']));
            expect(body[0]).has.property("email", "Sincere@april.biz");
            cy.log(body[0]);
            console.log(body[0]); // print out its email address to console
        }); 
    })
})
