/// <reference types="cypress" />


export class Request {    
    jsonplaceholderUser() {
        return cy.request({
            method: 'GET', 
            url: 'https://jsonplaceholder.typicode.com/users',
            headers: {'Content-Type': 'application/json'}
        });      
    }
    
    jsonplaceholderPosts() {
        return cy.request({
            method: 'GET', 
            url: 'https://jsonplaceholder.typicode.com/users/1/posts',
            headers: {
                accept: 'application/json'
            }
        });     
    }

    jsonplaceholderPostsRequest() {
        return cy.request({
            method: 'POST', 
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: JSON.stringify({
                "userId": 1,
                "title": "12345",
                "body": "qwerty"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        });     
    }
}
export const request = new Request();