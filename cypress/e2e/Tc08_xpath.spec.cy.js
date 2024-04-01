/// <reference types="Cypress" />

//const { describe, it } = require("mocha");

describe('Xpath Functionality', function(){

    it('Login Test using Conduite by xpath locators', function(){

        cy.visit('https://react-redux.realworld.io/')
        cy.xpath('//a[normalize-space()="Sign in"]').click()
        cy.xpath('//input[@placeholder="Email"]').type('cypressdemo@gmail.com')
        cy.xpath('//input[@placeholder="Password"]').type('cypressdemo')
        cy.xpath('//button[normalize-space()="Sign in"]').click()
        cy.xpath('//a[@href="#settings"]').click()
        //cy.scrollTo(0, 500)
        cy.get('.btn.btn-outline-danger').click()
    })
})