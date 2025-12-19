console.log("===== STRING BASICS =====");

// Creating strings
let name = "Sneha";
let city = "Kolkata";
console.log(name);
console.log(city);

//String Interpolation use backtick
let message = `Hello ${name}, welcome to ${city}`;

console.log(message);

// String length
let str = "JavaScript";
console.log("Length:", str.length);

// String methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("Script")); //returns true if it is there or false if not
console.log(str.indexOf("Script")); //returns the index of S that is 4
console.log(str.slice(0, 4)); //it gives java(0-3) the last index is not included
console.log(str.replace("Java", "Type"));

let newStr = "Hello ";
let newStr2 = "joee";
console.log(newStr.trim()); //removes whitespace
console.log(newStr.concat(newStr2))
console.log(newStr2.replace("e","h"));// Note it replaces only the first occurence
console.log(newStr.charAt(1))// returns the character at index 1 = e


// String immutability
//Immutable = any thing that doesn't change
let text = "Hello";
text[0] = "Y";
console.log("Immutable string:", text);

// Split & Join
// split()= It converts a String into an Array
let sentence = "I love JavaScript";
let words = sentence.split(" ");
console.log(words);

//reverse()= It reverses an array
//NOTE = it only works on an array
let reversedArray = words.reverse(); // here words is an array
console.log(reversedArray);

//join() = it converts an array back into a string
let joined = words.join(" ");
console.log(joined);

// Reverse a string
let original = "hello";
let reversed = original.split("").reverse().join("");
console.log("Reversed:", reversed);
/*first convert it in array .split("") // ["h","e","l","l","o"]
  then reverse it           .reverse() // ["o","l","l","e","h"]
  then again convert it in string .join("")//"olleh"
*/
//
/*
COMMON MISTAKES
str.split().reverse(); // ❌split() without argument
*/

// -----------------------------
// Question
// -----------------------------

//Question 1
//Reverse a string without built-in methods

let str1 = "hello";
let rev ="";
for(let i=str1.length-1;i>=0;i--)
{
 rev += str1.charAt(i);
}
console.log("Reversed without built-in method = "+rev);

//Question 2
//Remove duplicates in a String
//learn the set logic from array.js

let str2 = "programming";
//convert string to array
let arr = str.split("");
//put array into set
let uniqueSet = new Set(arr);
//Convert set to array
let uniqueArray=[...uniqueSet];
//convert array to string
let result = uniqueArray.join("");
console.log(result);

//More questions to practice
/*1.. check if a string is palindrome or not (medium)
palindrome is after reversing it gives the same string
INPUT = "madam"
OUTPUT = "madam"

  2.. Reverse words in a sentence (medium)
  INPUT = "I Love JS"
  OUTPUT = "JS Love I"
  //hint = split("")

  3.. Count vowels in a String (easy)
  INPUT = "BOXeR"
  OUTPUT = 2
  //hint = loop + includes()

  4.. Count Occurence of each character (medium)
  INPUT : "hello"
  OUTPUT : {h:1,e:1,l:2,o:1}
  //hint = object + loop

  5.. Find Longest word in a sentence (medium)
  INPUT : "I Love JS"
  OUTPUT : "Love"
  // hint = split +length check
*/
