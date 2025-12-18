console.log("===== Loops in JavaScript =====");

/*
Loops are used to repeat a block of code
until a condition becomes false.
*/

// -----------------------------
// for loop
// -----------------------------
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// -----------------------------
// while loop
// -----------------------------
console.log("While Loop:");
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// -----------------------------
// do-while loop
// -----------------------------
console.log("Do-While Loop:");
let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 5);

// -----------------------------
// for...in loop (objects)
// -----------------------------
console.log("For...in Loop:");

let person1 = {
  name: "Sneha",
  age: 22,
  city: "Delhi",
};

for (let key in person1) {
  console.log(key + " : " + person1[key]);
}

// -----------------------------
// for...of loop (arrays, strings)
// -----------------------------
console.log("For...of Loop:");

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// -----------------------------
// break statement
// -----------------------------
console.log("Break Example:");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// -----------------------------
// continue statement
// -----------------------------
console.log("Continue Example:");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// -----------------------------
// Question
// -----------------------------

console.log("Question 1");
//Check Whether a number is prime or not

let pNum = prompt("enter the number");
let counter = 0;
for (let i = 1; i <= pNum; i++) {
  if (pNum % i == 0) {
    counter++;
  }
}
if (counter == 2) {
  console.log(pNum + " is a prime Number");
} else {
  console.log(pNum + " is not a prime Number");
}

//More questions to practice
/*
1.. Find the factoial of a number
example factorial of 5 is 1*2*3*4*5 = 120

2.. Count how many numbers between 1-100 are divisible by 3

3.. Count number of digits in a number
number = 12345 , no of digits = 5
how to solve?
--keep a counter variable to count
--divide the number by 10 until it becomes 0
--when it becomes 0 print the count

4.. Write a program to reverse a number
for example numner = 1234 output = 4321

--Take the last digit of the number using % 10.
--Add this digit to the reverse number after multiplying it by 10.
--Remove the last digit from the original number using division by 10.
--Repeat the process until the number becomes 0.
--The final value stored is the reversed number.

5.. write a program to check if a number is palindrome or not
for example number = 121 output = it is a palindrome number
number = 123 output = it is not a palindrome number

-- write the reverse logic
-- store the original number in a duplicate variable
-- check if they are equal
 */
