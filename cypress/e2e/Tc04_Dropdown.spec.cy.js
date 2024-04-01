/// <reference types="Cypress" />

//const { describe, it } = require("mocha");

describe('Dropdown Functionality', function(){

    xit('Handling Static dropdown', function(){

        cy.visit('https://seleniumbase.io/demo_page')
        cy.get('#mySelect').select('Set to 100%').should('have.value', '100%')
    })

    xit('Handling dynamic dropdown', function(){

        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
        cy.get('.rddlItem').contains('Ikura').click()
    })

    it('Handling multiple dropdown', function(){

        cy.visit('https://demo.mobiscroll.com/select/multiple-select')
        cy.get('#multiple-select-input').click({force: true})
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Movies, Music & Games').click()
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Health & Beauty').click()
    })
})