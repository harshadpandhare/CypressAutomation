/// <reference types="Cypress" />

//const { describe, it } = require("mocha");

describe('Hooks Implementation', function(){

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
    })
    it('Search in Admin tab with Username', function(){
        cy.contains('Admin').click()
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('admin')
        cy.get('button[type="submit"]').click()
       
    })

    it('Search in Admin tab with Employee Name', function(){
        cy.contains('Admin').click()
        cy.xpath('(//input[@placeholder="Type for hints..."])[1]').type('Felipe Rivera')
        cy.get('button[type="submit"]').click()
       
    })

    afterEach(function(){
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Logout').click()
    })

})