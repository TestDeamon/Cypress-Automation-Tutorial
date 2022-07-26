describe("My second test", function(){
    beforeEach(()=>
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    )
    it('Clicks Checkboxes', ()=>{
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get('#radio-btn-example fieldset label[for=\'radio2\'] input').check();

        cy.get('#radio-btn-example fieldset label[for=\'radio2\'] input').should('be.checked')

        cy.get('input[type=\'checkbox\']').eq(0).check();

        cy.get('select').select('option2').should('have.value', 'option2')

        // li.ui-menu-item .ui-menu-item-wrapper


        //DYNAMIC DROPDOWNS 
        cy.get('#autocomplete').type('ind')
        cy.wait(2000);
        cy.get('.ui-menu-item div').each(($el, index,$list) => {
            if($el.text()==="India"){
                 cy.wrap($el).click()
            }
        })

        //HIDE ELEMENT AND CONFIRM HIDING 
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click(); 
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

});