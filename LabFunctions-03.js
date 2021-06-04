/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Lab 3 - using JS in HTML files
*/

// this function takes the input and sums up the odd integers in an odd number
function sumOddInts (n) {
    let sum = 0; // this variable resets everytime function is ran, because it is initialized within the function

// determines if number is odd and loops until it reaches the odd value
    for (let i = 1; (i <= n); i += 2) {
        
        sum += i; // calculates the sum
    }
    return sum;
}

/* 
part 2 of lab 3 tests:

sumOddInts(5)
9
sumOddInts(12)
0
sumOddInts(-19)
0
sumOddInts (19)
100
*/


// has user input their own odd number to use in the function above
let n = parseFloat(prompt("Enter odd number here:", "5"));

/* 
used before I included the querySelector and .innerHTML, to call on previous functions:
sumOddInts(number);
*/


// this allows us to display the results of the sumOddInts into the div section of our html
document.querySelector( "div" ).innerHTML = "The sum of all odd numbers from 1 to " + n + " is " + sumOddInts(n);