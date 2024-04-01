/// <reference types="Cypress" />

//const { describe, it } = require("mocha");

describe('Fixtures test', function(){

    beforeEach(function(){
        cy.fixture('conduitLoginData').as('data')
    })

    it('Conduite - valid Credentials', function(){

        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type(this.data.validEmail)
        cy.get('input[placeholder="Password"]').type(this.data.validPassword)
        cy.get('button[type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        //cy.scrollTo(0, 500)
        cy.contains('Or click here to logout.').click()
    })

    it('Conduite - Invalid Credentials', function(){

        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type(this.data.invalidEmail)
        cy.get('input[placeholder="Password"]').type(this.data.invalidPassword)
        cy.get('button[type="submit"]').click()
        cy.get('.error-messages').should('contain', 'email or password is invalid')
    })

})