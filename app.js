//123 Code! CH. 1

// Log name and Age
console.log("Gavin Burris");
console.log(19);

// Minimalistic calculator
console.log(6 + 4);
console.log(6 - 4);
console.log(6 * 4);
console.log(6 / 3);

// Predictions
/* 
9
4 + 5
45
*/

//123 Code Ch. 2

// Hello User
let firstName = prompt("Enter your First Name: ");
let lastName = prompt("Enter your Last Name: ");

alert("Hello " + firstName + " " + lastName + ".");

// Final Values
/*
a = 2;
b = 10;
c = 102;
d = 30;
e = 40;
f = 10;
g = 10;
*/

// Vat Calc
let price = Number(prompt("Enter Raw Price: "));
let addedAmount = price * .206;
alert("You Owe $" + (price + addedAmount) + " for that item.");

// C -> F
let cDegree = Number(prompt("Enter degrees in Celsius: "));
let fDegree = cDegree * (9/5) + 32;
alert(cDegree + " is " + fDegree + " in Fahrenheit.");

// Variable Swap
let number1 = 5;
let number2 = 3;

let temp = number1;
number1 = number2;
number2 = temp;

console.log(number1); // Should show 3
console.log(number2); // Should show 5
