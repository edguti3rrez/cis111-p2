/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Project 2 - Part 4: Using functions in a linked HTML
*/

// pizza price calculation from Project 2, Part 3C
function pizzaPSI (pizzaPrice, diameterIn) {
    let costPSI = pizzaPrice/(Math.pow(diameterIn/2, 2) * Math.PI)
    return costPSI.toFixed(2);
}

let pizzaPrice = parseFloat(prompt("Please enter the price of the pizza here:"));
let diameterIn = parseFloat(prompt("Please enter the diameter of the pizza in inches here:"));

document.querySelector( "div" ).innerHTML = "Hit Reload/Refresh to run again." + "<br />" + "Cost: $" + pizzaPrice + "<br />" + "Diameter: " + diameterIn + "<br />" + "Cost PSI: " + pizzaPSI(pizzaPrice, diameterIn);