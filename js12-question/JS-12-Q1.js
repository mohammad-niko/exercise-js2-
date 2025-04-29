//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:


//  YOU HAVE ACCESS TO VARIABELS WHERE YOU ARE DEFINED NOT WHERE YOU ARE CALLED./






function harchi(params) {//✅
    let a = "ali"
    function name(params) {
        console.log(a);
    }

    name()
};

harchi();




function namidonam(params) {//❌
    let num = 0 ;

return   number;
}
function number(params) {
    console.log(num);
}

const mmmmm = namidonam;

mmmmm()