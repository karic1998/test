/// <reference types="cypress" />

import auto from '../page_objects/autocorrect'
import calculator from '../page_objects/google_calculator'


describe('Test', () => {
    const calc = new calculator()                       //Declaration of page object for the first test case
    const autocorrect = new auto()                      //Declaration of page object for the second test case
    
    it("Calculator", () => {
        calc.navigate()                                 //1.step [OPEN google.com]
        calc.fill_search_box('2+2')                     //2.step [Type 2+2]
        calc.search_button()                            //3.step [Click on search button]
        calc.check_calc_visibility()                    //4.step [Check if calculator apears]
        calc.check_expresion('2 + 2 =')                 //5.step [Check expresion]
        calc.check_result('4')                          //6.step [Check result]
    })
    it("Autocorrect", () => {
        autocorrect.navigate()                          //1.step [OPEN google.com]
        autocorrect.fill_search_box('mispelled')        //2.step [Type mispelled]
        autocorrect.search_button()                     //3.step [Click on search button]
        autocorrect.check_suggested_word('misspelled')  //4.step [Check suggested word]
    })
})