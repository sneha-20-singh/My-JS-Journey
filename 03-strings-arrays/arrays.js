console.log("===== ARRAY BASICS =====");

// Creating arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "mango"];

console.log(numbers);
console.log(fruits);

// Access elements
console.log(fruits[0]);
console.log(fruits[2]);

// Array length
console.log("Length:", fruits.length);

// Array methods
fruits.push("orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("grapes");
console.log(fruits);

fruits.shift();
console.log(fruits);

// Looping arrays
console.log("For loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("forEach:");
numbers.forEach((num) => console.log(num * 2));

// map
let squares = numbers.map((n) => n * n);
console.log("Squares:", squares);

// filter
let evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log("Even:", evenNumbers);

// reduce
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// Remove duplicates
let dupArray = [1, 2, 2, 3, 4, 4];
let uniqueArray = [...new Set(dupArray)];
console.log("Unique:", uniqueArray);

// -----------------------------
//SET
// -----------------------------

//Set is a special object that stores ONLY UNIQUE value
/*
❌no duplicates allowed
✔️Order is preserved

📌when to use set

✔️ remove duplicates
✔️unique elements
✔️fast lookup

*/
//example
let s = new Set([1, 2, 2, 3]);
console.log(s); // Set{1,2,3}

// -----------------------------
//Spread Operator
// -----------------------------

/*
... means = it spreads elements of an array/string/object one by one
 */
//Example
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);


// -----------------------------
// Question
// -----------------------------

//Question 1
// Merge two arrays using spread operator
let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log("Merged array = "+merged);


//More questions to practice
/*
1.. Remove duplicates without set logic
2.. Find Largest and Smallest element in array
INPUT = [1,5,3,9,2]
OUTPUT = 9(LARGEST),1(SMALLEST)
3.. Sum of all elements in an array
4.. Reverse an array
5.. Count even and odd in an array
 */
