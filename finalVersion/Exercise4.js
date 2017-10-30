// ------------------------------------------------------------------------------
// Assignment (3)
// Written by: zhihong guo 40038183
// For SOEN 287 Section (2164) – Winter 2017
// -----------------------------------------------------------------------------

// Exercise4.js
// is executed during form submission to calculate the cost of each book
//(based on quantity specified) and the overall total cost

/*
 Event handler
 */
function RegisterTheEventHandler(){
    document.getElementById("sub") .addEventListener("click",add,false);
}

/*
 add()function inputs the data then calculates the result and display it.
 */
function add() {
    //obtain values from the user's input
    var a = document.getElementById("book_1").value;
    var b = document.getElementById("book_2").value;
    var c = document.getElementById("book_3").value;
    var f = a*19.99;
    var g = b*86;
    var h = c*55;
    var sum = f+g+h;

    if(a.length==0||b. length==0||c.length==0){//scenario that there is no input.
        alert("Please enter a number!");
    }
    else if(isNaN(a)||isNaN(b)||isNaN(c)){//scenario that the input is invalid.
        alert("You can only enter numbers!");
    }
    else {
        var node0 = document.createElement("div");//create a new element div called node0.
        node0.Id="messages";

        /*
         output nodes
         */
        var node1 = document.createElement("p");
        node1.id = "p1";
        var node2 = document.createElement("p");
        node2.id = "p2";
        var node3 =  document.createElement("p");
        node3.id = "p3";
        var node4 =  document.createElement("p");
        node4.id = "p4";

        /*
         put all of output nodes under element div.
         */
        node0.appendChild(node1);
        node0.appendChild(node2);
        node0.appendChild(node3);
        node0.appendChild(node4);
        document.body.appendChild(node0);//put node0 under body section

        /*
        display on the html.
         */
        document.getElementById("p1").innerHTML = "<strong>Basic XHTML (Quantity = </strong>" + a + "): $" + (f)+"<br/>";
        document.getElementById("p2").innerHTML = "<strong>Intro to PHP (Quantity = </strong>" + b + "): $" + (g)+"<br/>";
        document.getElementById("p3").innerHTML = "<strong>Advanced JQuery (Quantity = </strong>" + c + "): $" + (h)+"<br/><br/>";
        document.getElementById("p4").innerHTML = "<strong>Final Total: $</strong>" + sum;
    }
}
window.addEventListener("load" ,RegisterTheEventHandler,false);