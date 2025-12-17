//=====================================
// JavaScript Variables
//=====================================

//var(function scoped - avoid using)
/* Variables can be redeclared & updated
   A global Scope Variable
*/
var name = "Sneha";
console.log(name);

// let(block scope)
/* Variables cannot be redeclared but can be updated 
   A block Scope Variable
 */

   let age = 12;
   console.log(age);

//const(block scope)
/* Variables cannot be redeclared or updated
   A block Scope Variable
 */

   const country ="India";
   console.log(country);
 
   //difference between let and const
   let score = 50;
   score=60;
   console.log(score) // allowed

   //const score = 50;
   //   score = 60; //❌ Not allowed

   /*
    Key Points:
    - var is function scoped
    - let and const are block scoped
    - const must be initialized while declaring
    */
    