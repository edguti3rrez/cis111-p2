/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Project 2 - Part 3: practice with functions
*/


// Part A: takes the average of three numbers
function avg3 (n1, n2, n3) {
    return (n1 + n2 + n3)/3;
}

// practice input:
avg3 (4, 2, 6)


// Part B: calculates tip amount by inputing price and the tip percent
function getTip (price, tipPercent) {
    let tipAmount = price * tipPercent;
    return "$" + tipAmount.toFixed(2);
}

// practice input:
getTip (10.000, 0.15)

getTip (10.00, 0.2)


// Part C: calculates price per square inch of pizza
function pizzaPSI (pizzaPrice, diameterIn) {
    let costPSI = pizzaPrice/(Math.pow(diameterIn/2, 2) * Math.PI)
    return "$" + costPSI.toFixed(2);
}

// practice inputs:
pizzaPSI (10.00, 12)

pizzaPSI (23.95, 18)


// Part D: detects alphabet characters in strings and finds them to be true
function isAlpha (char) {
    if (('a' <= char && char <= 'z') || ('A' <= char && char <= 'z')){
        return true;
    } else {
        return false;
    }
} 

// practice inputs:
isAlpha ("A")

isAlpha("!")

isAlpha(1)

// Part E: sums up integers between zero and the inputed number
function sumNumbers(num) {
    let sum = 0; 
    let i = 0;

    while (i < num + 1) { // loops summing positive integers
        sum += i; 
        i ++;

        if (i == num) {
            break;
        }
    }
    
    for (; i > num - 1; i--) { // loops summing negative integers
        sum += i;

        if (i == num) {
            break;
        }
    }

    if (num == 0) {
        return num;
    }
    return sum;
}

// practice inputs:
sumNumbers (3)

sumNumbers (-3)

sumNumbers (0)