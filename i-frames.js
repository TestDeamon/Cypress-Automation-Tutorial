//Enable autosuggestion of Cypress commands 
/// <reference types="Cypress" /> 
//Enable autosuggestion of cypress iframes command 
/// <reference types="cypress-iframe" />
import 'cypress-iframe' 


describe("Handle child tab by opening link through href", function(){
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })
    it("Opens link by getting button href value", function(){
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*=\"mentorship\"]").eq(0).click(); 
    })
})