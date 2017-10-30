// ------------------------------------------------------------------------------
// Assignment (3)
// Written by: zhihong guo 40038183
// For SOEN 287 Section (2164) – Winter 2017
// -----------------------------------------------------------------------------

// Ampersands.js
// is executed during form submission to calculate the cost of each book
//(based on quantity specified) and the overall total cost

/*
 Global variables
 */
var dom;

/*
 getElementAmpersand() function
 converts all ampersands to ″ and ″ in the form field when
 the field loses focus element (blur).
 */
function getElementAmpersand(){
    dom = document.getElementById("field");
    dom.addEventListener("blur",convertAmpersands,false);
}


/*
 convertAmpersands() function does the convert and display results.
 */

function convertAmpersands(){
    /*
     local variables
     */
    var result;
    result = dom.value.replace(/&/g," and ");
    document.getElementById("output").value = result;//let the output display converted results
}
window.addEventListener("load",getElementAmpersand,false);
