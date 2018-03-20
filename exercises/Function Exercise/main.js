// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function add(num1, num2) {
    return num1 + num2;
}
var sum = add(13, 5);
console.log(sum);

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function maxOfThose(num1, num2, num3) {
    max = num1;
    if (num2 > max);
    max = num2;
    if (num3 > max);
    max = num3;
    return max;
}
maxOfThose(10, 20, 90);
console.log(max);

// Function multiplies

var sum = multiply(5, 6);
console.log(sum);

//  Factorial function.
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(3));

function isEven(n) {
    return n % 2 == 0;
}

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd").

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}
console.log(isEven(9));

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.


function countlength(string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] <= 20) {
            return string[i] + string[i];
        } else {
            return string / 2;
        }
    }
}