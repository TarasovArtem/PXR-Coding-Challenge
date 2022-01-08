/// <reference types="cypress" />

import {request} from '../../page_objects/functional_API_testing/requests';

describe('Task 2: Functional API testing', () => {     
    let body;

    it('Should use this userID, get this user’s associated posts and verify they contains a valid Post IDs', () => { 
        request.jsonplaceholderPosts().then(response => {   
            body = JSON.parse(JSON.stringify(response.body));     
            cy.log(body)

            body.forEach(function(item) {
                expect(item).to.have.keys("userId", "id", "title", "body");
                cy.log("UserID: " +  item["userId"] + " & ID: " + item["id"] + " & Post: " + item["body"])
                console.log("UserID: " +  item["userId"] + " , ID: " + item["id"] + " , Post: " + item["body"])
            
            });
        });  
    })
})