/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Lab 2 - Practicing functions and working with strongs and numbers
*/

function doAlert (input) {
    alert (input);
}

// User input to test function above:
doAlert(711)
doAlert("Hello, World!")


// For given width and height, will find diagonal measurement and display in console
function getDiagonal (width, height) {
    let diagonalSqrd = Math.pow(width, 2) + Math.pow(height, 2);
    let diagonal = Math.sqrt(diagonalSqrd);
    return diagonal;
}

// User input to test getDiagonal function above:
getDiagonal(8, 14)
getDiagonal(9.4, 5.1)


/* This function squares numbers, even ones in strings, but does not work with alphabet. 
Numbers within strings can still be multiplied with each other. Letters and other kinds 
of strings that do not soley contrain numbers don't really work like that and instead
return a "NaN". JavaScript must have some underlying ability to convert strings to 
numbers when it possible to do so. Not to mention the multiply sign of * only 
works to power to numbers, and does not concatenate strings like arithmetic functions might. */
function square_v1 (num) {
    let square = num * num;
    return square;
}

// User input to test square_v1 function above:
square_v1(4)
square_v1("4")
square_v1("abc")


function square_v2 (number) {
    let square2 = number * number;
     console.log(typeof(number)+ ",", square2);   
}

// User input to test square_v2 function above:
square_v2(4)
square_v2("4")