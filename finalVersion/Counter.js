// ------------------------------------------------------------------------------
// Assignment (3)
// Written by: zhihong guo 40038183
// For SOEN 287 Section (2164) – Winter 2017
// -----------------------------------------------------------------------------

// Counter.js
// Write a script that contains a button.The button’s event handler should
// increment the counter each time it’s clicked.

/*
 Global variables
 */
var counter = 0,dom;

/*
 getElementBtnIncrement() function
 uses addEventListener function to execute increment()function
 and assign values from ID's from Counter.html by getElementById function.
 */
function getElementBtnIncrement() {
    var a = document.getElementById("increment");
    dom = document.getElementById("dom");
    a.addEventListener("click",increment,false);
}

/*
 increment() function does the increment and display results.
 */
function increment() {
    while(document.getElementById("increment").value) {//get increment'id directly since var a above is a local variable.
        counter += 1;//counter increases each time after the user clicked
        break;//break each time after the user clicked.
    }
    dom.innerHTML = "Count = "+counter;//display the result
}
window.addEventListener( "load", getElementBtnIncrement, false );