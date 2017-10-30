// ------------------------------------------------------------------------------
// Assignment (3)
// Written by: zhihong guo 40038183
// For SOEN 287 Section (2164) – Winter 2017
// -----------------------------------------------------------------------------

// Question5.js
// The running problem to build a website of apartment search
//to resume the Zhihong’s Apartment Search Web site in Assignment 1

/*
 first event handler
 */
function getSuggestions(){
    document.getElementById("search").addEventListener("click",expertSuggestions,false);
}
/*
 expertSuggestions()function do the suggestion and display it.
 */
function expertSuggestions() {

    /*
     obtain values from the user's inputs
     */
    var visibility = document.getElementById("expertSuggestions").style;
    var downtown = document.getElementById("dt");
    var size1 = document.getElementById("fourAndHalf");
    var size2 =document.getElementById("fiveAndHalf");
    var size3 =document.getElementById("moreThanFiveAndHalf");
    var price1 =document.getElementById("reg");
    var price2 =document.getElementById("lat");

    if(downtown.checked && size3.checked){//when size is more than FiveAndHalf and location is downtown
        visibility.visibility = "visible";//display Expert suggestions part
        display();//call the second event handler to display information
    }
    else if((size1.checked || size2.checked ||size3.checked )&& downtown.checked && (price1.selected || price2.selected) ){//when size is more than fourAndHalf,location is downtown and the price is below $1000
        visibility.visibility = "visible";//display Expert suggestions part
        display();//call the second event handler to display information
    }
}
window.addEventListener("load", getSuggestions,false);

//second event handler
function display(){
    document.getElementById("search").addEventListener("mousemove",displayExpertSuggestions,false);
}
function displayExpertSuggestions() {

    /*
     obtain values from the user's inputs
     */
    var visibility = document.getElementById("expertSuggestions").style;
    var downtown = document.getElementById("dt");
    var size1 = document.getElementById("fourAndHalf");
    var size2 =document.getElementById("fiveAndHalf");
    var size3 =document.getElementById("moreThanFiveAndHalf");
    var price1 =document.getElementById("reg");
    var price2 =document.getElementById("lat");

    if(downtown.checked && size3.checked){//when size is more than FiveAndHalf and location is downtown
        document.getElementById("message").innerHTML="It is very difficult to find an apartment larger than 5&frac12 in downtown.";
    }
    else if((size1.checked || size2.checked ||size3.checked )&& downtown.checked && (price1.selected || price2.selected) ){//when size is more than fourAndHalf,location is downtown and the price is below $1000
        document.getElementById("message").innerHTML="Normally an apartment of 4&frac12 and above costs more than 1000$ in downtown area.";
    }
}