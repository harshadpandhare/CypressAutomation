/// <reference types="Cypress" />

//const { describe, it } = require("mocha");

describe('Login Functionality', function(){

    it('Login Test using Conduite', function(){

        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type('cypressdemo@gmail.com')
        cy.get('input[placeholder="Password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        //cy.scrollTo(0, 500)
        cy.get('.btn.btn-outline-danger').click()
    })
})