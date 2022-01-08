/// <reference types="cypress" />

import {request} from '../../page_objects/functional_API_testing/requests';

describe('Task 2: Functional API testing', () => {     
    let body;

    it('Should use this userID, get this user associated posts', () => { 
        request.jsonplaceholderPostsRequest().then(response =>{
            expect(response.status).to.eql(201)
        })
    })    

    it('verify they contains a valid Post IDs', () => { 
        request.jsonplaceholderPosts().then(response => {   
            body = JSON.parse(JSON.stringify(response.body));    
        })
        .then(() => console.log(body))
    });
        
})

