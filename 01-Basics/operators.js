// ===============================
// JavaScript Operators
// ===============================

// Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division 
console.log(a % b); // modulus = gives the remainder

// Assignment Operators
let x = 5;
x += 2;
console.log(x);

let y = 8;
y-=3;
console.log(y);

let z = 10;
z/=2;
console.log(z);

let k= 3;
k*=3;
console.log(k);

// Comparison Operators
console.log(5 == "5");   // true (loose equality checks only value)
console.log(5 === "5");  // false (strict equality checks value as well as data types)

console.log(10 > 5);
console.log(10 <= 5);

// Logical Operators
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // AND
console.log(isAdult || hasID); // OR
console.log(!isAdult);         // NOT