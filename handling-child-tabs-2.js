//Enable autosuggestion of Cypress commands 
/// <reference types="Cypress" /> 


describe("Handle child tab by opening link through href", function(){
    beforeEach(()=>{
        cy.visit("https://qaclickacademy.com/practice.php");
    })
    it("Opens link by getting button href value", function(){
        cy.get("#opentab").then(function(el){
              const link = el.prop('href') 
              cy.log(link)
              cy.visit(link) 
        })
    })
})