///<reference types="cypress"/>
describe("Child tab handling", function(){
    beforeEach(()=>{
        cy.visit("https://qaclickacademy.com/practice.php");
    })
    it("Performs mouse over", function(){
        cy.get("div.mouse-hover-content").invoke('show')
        cy.wait(2000)
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })
})