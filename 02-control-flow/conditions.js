console.log("===== Conditional Statements =====");

/*
Conditional statements are used to make decisions
based on conditions (true / false).
*/

// -----------------------------
// if statement
// -----------------------------
let Userage = 18;

if (Userage >= 18) {
  console.log("You are eligible to vote");
}

// -----------------------------
// if - else statement
// -----------------------------
let number = 7;

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// -----------------------------
// if - else if - else statement
// -----------------------------
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

// -----------------------------
// Nested if
// -----------------------------

//Write a program to check username and password

let UserName = "joe@usa";
let password = 9876;
let userPrompt1 = prompt("enter the username: ");
let userPrompt2 = Number(prompt("enter the password: "));
if (userPrompt1 === UserName) {
  if (userPrompt2 === password) {
    console.log("Login Successfull");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("Incorrect UserName");
}

// -----------------------------
// switch statement
// -----------------------------
let day = Number(prompt("enter the day"));

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// -----------------------------
// Questions
// -----------------------------

console.log("Question 1");
/*
Create a game where you start with any random game number
ask the user to keep guessing the game number until the user enters the correct value
 */
let gameNumber = 35;
let userNumber = prompt("enter the game Number");
while (userNumber != gameNumber) {
  userNumber = prompt("you enetered the wrong number :) Guess again ");
}
console.log("Congratulations, You entered the right number.");

//More questions to practice
/*
1.. Write a program to check whether a number is divisible by 3 and 5.

2.. Write a program to find whether a character is:
Vowel
Consonant

3.. Write a program to calculate electricity bill:
First 100 units → ₹1/unit
Next 100 units → ₹2/unit
Above 200 units → ₹3/unit

4.. Write a program to check whether a number is:
Positive & even
Positive & odd
Negative

5.. Write a program to check whether a year is:
leap year
not a leap year
 */

