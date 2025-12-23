// =====================================
// functions.js (DETAILED VERSION)
// =====================================

// -------------------------------------------------
// 1️⃣ What is a Function?
// A function is a reusable block of code
// -------------------------------------------------

function greet() {
  console.log("Hello, Welcome to JavaScript");
}

greet();

// -------------------------------------------------
// 2️⃣ Function with Parameters & Arguments
// -------------------------------------------------

function add(a, b) {
  console.log("Sum:", a + b);
}

add(5, 10);

// -------------------------------------------------
// 3️⃣ Function with Return Statement
// -------------------------------------------------

function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 5);
console.log("Multiplication:", result);

// -------------------------------------------------
// 4️⃣ Function Expression
// -------------------------------------------------

const subtract = function (a, b) {
  return a - b;
};

console.log("Subtraction:", subtract(10, 3));

// -------------------------------------------------
// 5️⃣ Arrow Function
// -------------------------------------------------

const square = (num) => {
  return num * num;
};

console.log("Square:", square(6));

// -------------------------------------------------
// 6️⃣ Arrow Function (Short Syntax)
// -------------------------------------------------

const cube = num => num * num * num;
console.log("Cube:", cube(3));

// -------------------------------------------------
// 7️⃣ Default Parameters
// -------------------------------------------------

function greetUser(name = "Guest") {
  console.log("Hello", name);
}

greetUser("Sneha");
greetUser();

// -------------------------------------------------
// 8️⃣ Anonymous Function
// -------------------------------------------------

setTimeout(function () {
  console.log("This is an anonymous function");
}, 1000);

// -------------------------------------------------
// 9️⃣ Callback Function
// -------------------------------------------------

function calculate(a, b, callback) {
  return callback(a, b);
}

function sum(x, y) {
  return x + y;
}

console.log("Callback Result:", calculate(5, 6, sum));

// -------------------------------------------------
// 🔟 Function inside Function
// -------------------------------------------------

function outerFunction() {
  console.log("Outer function");

  function innerFunction() {
    console.log("Inner function");
  }

  innerFunction();
}

outerFunction();

// -------------------------------------------------
// 1️⃣1️⃣ IIFE (Immediately Invoked Function Expression)
// -------------------------------------------------

(function () {
  console.log("IIFE executed immediately");
})();

// -------------------------------------------------
// 1️⃣2️⃣ Global vs Local Scope
// -------------------------------------------------

let globalVar = "I am global";

function scopeTest() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}

scopeTest();

// -------------------------------------------------
// 1️⃣3️⃣ Hoisting (Function Declaration)
// -------------------------------------------------

hoistedFunction();

function hoistedFunction() {
  console.log("This function is hoisted");
}

// -------------------------------------------------
// 1️⃣4️⃣ Hoisting (Function Expression)
// ❌ This will NOT work if called before definition
// -------------------------------------------------

const notHoisted = function () {
  console.log("Function expression is not hoisted");
};

notHoisted();

// -------------------------------------------------
// 1️⃣5️⃣ Rest Parameters
// -------------------------------------------------

function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log("Sum All:", sumAll(1, 2, 3, 4, 5));

// -------------------------------------------------
// 1️⃣6️⃣ Function Returning Function
// -------------------------------------------------

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log("Double:", double(5));

// -------------------------------------------------
// 1️⃣7️⃣ Pure Function
// -------------------------------------------------

function pureAdd(a, b) {
  return a + b;
}

console.log("Pure Function:", pureAdd(2, 3));

// -------------------------------------------------
// 1️⃣8️⃣ Impure Function
// -------------------------------------------------

let count = 0;

function impureIncrement() {
  count++;
}

impureIncrement();
console.log("Impure Count:", count);

