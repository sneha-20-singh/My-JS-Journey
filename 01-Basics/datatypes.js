// ===============================
// JavaScript Data Types
// ===============================

// In JavaScript the data types are divided into Primitive and Non Primitive(Reference)types

/* Primitive Data Types 
Total = 7
1.Number
2.String
3.Boolean
4.Undefined
5.Null
6.Symbol
7.BigInt
 */

/* Non-Primitive Data Types 
Total = 3
1.Object
2.Array
3.Function
 */


// Primitive Data Types
let numberType = 10;                    // Number
let stringType = "Hello JS";           // String
let booleanType = true;               // Boolean
let undefinedType;                   // Undefined
let nullType = null;                // Null
let id=Symbol("id");               //Symbol
let big = 12345678901234567890n;  //BigInt
console.log(typeof numberType);
console.log(typeof stringType);
console.log(typeof booleanType);
console.log(typeof undefinedType);
console.log(typeof nullType); //object (JS bug)
console.log(typeof id);
console.log(typeof big);  

// Non-Primitive Data Types
//object
let person = {
  name: "Sneha",
  age: 22
};

//array
let numbers = [1, 2, 3, 4];

//function
function greet() {
  console.log("Hello");
}
console.log(typeof person);   // object
console.log(typeof numbers);  // object
console.log(typeof greet);    // function