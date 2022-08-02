///<reference types="cypress"/>
describe("Child tab handling", function(){
    beforeEach(()=>{
        cy.visit("https://qaclickacademy.com/practice.php");
    })
    it("Switches to new opened tabs", function(){
        cy.get("#opentab").invoke('removeAttr', 'target').click()
    })
})