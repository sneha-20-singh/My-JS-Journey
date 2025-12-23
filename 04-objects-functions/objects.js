// =====================================
// objects.js (DETAILED VERSION)
// =====================================

// -------------------------------------------------
// 1️⃣ What is an Object?
// An object stores data in key-value pairs
// -------------------------------------------------

const user = {
  name: "Sneha",
  age: 22,
  email: "sneha@gmail.com",
  isLoggedIn: true
};

console.log("User Object:", user);

// -------------------------------------------------
// 2️⃣ Accessing Object Properties
// -------------------------------------------------

// Dot notation
console.log("Name:", user.name);

// Bracket notation
console.log("Email:", user["email"]);

// -------------------------------------------------
// 3️⃣ Adding & Updating Properties
// -------------------------------------------------

user.age = 23;            // update
user.city = "Kolkata";    // add new property

console.log("Updated User:", user);

// -------------------------------------------------
// 4️⃣ Deleting Object Property
// -------------------------------------------------

delete user.isLoggedIn;
console.log("After Delete:", user);

// -------------------------------------------------
// 5️⃣ Nested Objects
// -------------------------------------------------

const student = {
  name: "Rahul",
  rollNo: 101,
  marks: {
    math: 80,
    science: 90,
    english: 85
  }
};

console.log("Math Marks:", student.marks.math);

// -------------------------------------------------
// 6️⃣ Object Methods
// Functions inside objects are called methods
// -------------------------------------------------

const person = {
  name: "Amit",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet();

// -------------------------------------------------
// 7️⃣ this keyword
// 'this' refers to the current object
// -------------------------------------------------

const car = {
  brand: "Toyota",
  model: "Innova",
  showDetails() {
    console.log(this.brand + " " + this.model);
  }
};

car.showDetails();

// -------------------------------------------------
// 8️⃣ Looping through Object (for...in)
// -------------------------------------------------

const book = {
  title: "JavaScript",
  author: "Unknown",
  price: 499
};

for (let key in book) {
  console.log(key + " : " + book[key]);
}

// -------------------------------------------------
// 9️⃣ Object Destructuring
// -------------------------------------------------

const employee = {
  empName: "Ravi",
  empId: 101,
  department: "IT"
};

const { empName, department } = employee;
console.log("Employee Name:", empName);
console.log("Department:", department);

// -------------------------------------------------
// 🔟 Object.keys(), Object.values(), Object.entries()
// -------------------------------------------------

console.log("Keys:", Object.keys(employee));
console.log("Values:", Object.values(employee));
console.log("Entries:", Object.entries(employee));

// -------------------------------------------------
// 1️⃣1️⃣ Checking if Property Exists
// -------------------------------------------------

console.log("empId exists:", "empId" in employee);
console.log("salary exists:", employee.hasOwnProperty("salary"));

// -------------------------------------------------
// 1️⃣2️⃣ Objects inside Array
// -------------------------------------------------

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];

for (let user of users) {
  console.log("User Name:", user.name);
}

// -------------------------------------------------
// 1️⃣3️⃣ Shallow Copy using Object.assign()
// -------------------------------------------------

const copyEmployee = Object.assign({}, employee);
console.log("Copied Object:", copyEmployee);

// -------------------------------------------------
// 1️⃣4️⃣ Spread Operator with Object
// -------------------------------------------------

const newEmployee = {
  ...employee,
  salary: 50000,
  location: "Bangalore"
};

console.log("New Employee:", newEmployee);
// -------------------------------------------------
// 1️⃣5️⃣ Object Reference Behavior
// -------------------------------------------------

const obj1 = { value: 10 };
const obj2 = obj1;

obj2.value = 20;
console.log("obj1:", obj1);
console.log("obj2:", obj2);

// -------------------------------------------------
// 1️⃣6️⃣ Optional Chaining (Safe Access)
// -------------------------------------------------

const userData = {
  profile: {
    username: "sneha123"
  }
};

console.log(userData.profile?.username);
console.log(userData.profile?.address?.city);

