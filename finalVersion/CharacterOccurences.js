// ------------------------------------------------------------------------------
// Assignment (3)
// Written by: zhihong guo 40038183
// For SOEN 287 Section (2164) – Winter 2017
// -----------------------------------------------------------------------------

// CharacterOccurences.js
// inputs several lines of text and a search character and uses String method indexOf() to determine the number of occurrences of the character in text.

/*
 Global variables
 */
var searchStr,ch,outResult;

/*
 getAllDomElement() function
 uses addEventListener function to execute searchOccurrences() function
 and assign values from ID's from Question#1.html by getElementById function.
 */
function getAllDomElement(){
    var a = document.getElementById("searchButton");
    searchStr = document.getElementById("searchString");
    ch  = document.getElementById("characters");
    outResult = document.getElementById("output");
    a.addEventListener("click",searchOccurrences,false);
}

/*
 searchOccurrences() function does the search and display results.
 */
function searchOccurrences(){
    /*
    local variables
     */
    var count = 0,chValue, searchSt, result;

    /*
    cast both character and texts to lower letters to make sure a precise comparison.
     */
    chValue = ch.value.toLowerCase();
    searchSt = searchStr.value.toLowerCase();
    for(var i = 0;i<searchSt.length;i++){
        if (chValue.length == 1 && searchSt.indexOf(chValue) != -1 && searchSt.charAt(i) == chValue) {//make sure an empty prompt or multiple numbers of characters does not affect results.
            count++;
        }
    }
    if(count == 0){
        result = "The character '"+chValue+"' not found.";
    }
    else {
        result = count+" occurrence(s) of '"+chValue+"' found";
    }
    outResult.innerHTML = result;
}

window.addEventListener("load",getAllDomElement,false);