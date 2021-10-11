/// <reference types="cypress" />



class calculator{

    navigate(){
        cy.visit('https://www.google.com/')
    }
    fill_search_box(value){
        cy.get('.gLFyf').type(value)
    }
    search_button(){
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    }
    check_calc_visibility(){
        cy.get('.TIGsTb').should('be.visible')
    }
    check_expresion(value){
        cy.get('.vUGUtc').then(($text)=>{
            const txt = $text.text()
            expect(txt).to.contain(value)
        })
    }
    check_result(value){
        cy.get('#cwos').then(($text)=>{
            const txt = $text.text()
            expect(txt).to.contain(value)
        })
    }
    
}

export default calculator