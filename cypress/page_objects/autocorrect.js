/// <reference types="cypress" />



class auto{

    navigate(){
        cy.visit('https://www.google.com/')
    }
    fill_search_box(value){
        cy.get('.gLFyf').type(value)
    }
    search_button(){
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    }
    check_suggested_word(value){
        cy.get('i').then(($text)=>{
            const txt = $text.text()
            expect(txt).to.contain(value)
        })
    }
    
}

export default auto