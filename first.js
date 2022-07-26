///<reference types="cypress" />

describe("To do app", function(){
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })

    it('Searches Cucumber', ()=>{
        cy.get('input[placeholder=\'Search for Vegetables and Fruits\']').type(`ca{enter}`)
        cy.get('.products div.product').should('have.length', 4)

        // cy.get('products').find('product').eq(2).click()

        cy.get('.products').find('.product').each(($el, _index, $list)=>{
            const value = $el.find('h4.product-name').text(); 
            if(value.includes('Cashews')){
                cy.wrap($el.find('button')).click(); 
            }
        })
    })
})