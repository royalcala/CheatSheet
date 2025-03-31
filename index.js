
// ==============================
// 1. Variables
// ==============================
let name = "Roy";
const age = 39;
var city = "CDMX";

// ==============================
// 2. Data Types
// ==============================
// Primitives
let str = "Hola";
let num = 42;
let bool = true;
let nul = null;
let undef = undefined;
// Symbol is a unique identifier that is not visible in the console
// and is not enumerable in objects.
// It is often used as a unique key for object properties.
let sym = Symbol('id');

// Reference Types
let arr = [1, 2, 3];
let obj = { key: "value" };
let date = new Date();
// regex is a regular expression object that can be used to match patterns in strings.
// It is often used for validation or searching.
// It is created using the RegExp constructor or by using the forward slashes.
// It can be used with methods like test() or exec() to check for matches.
let regex = /abc/;
regex.test("abcdef"); // true
// The above regex can also be created using the RegExp constructor.
// The constructor takes a string pattern and optional flags as arguments.
// The flags can be 'g' for global, 'i' for case insensitive, and 'm' for multiline.
// The constructor also allows for dynamic regex creation.
// Here is an example of creating a regex using the constructor:
let dynamicPattern = "abc";
let flags = "i";
let regex1 = new RegExp(dynamicPattern, flags);
// The above regex will match "abc" in a case insensitive manner.
// example with new RegExp
let regex2 = new RegExp('abc');
regex2.test("abcdef"); // true
// ==============================
// 3. Operators
// ==============================
// Arithmetic
// + - * / % **
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)
console.log(a ** b); // 1000 (exponentiation)

// Assignment
// = += -= *= /= 
let x = 5;
x += 3; // x = x + 3
console.log(x); // 8

x *= 2; // x = x * 2
console.log(x); // 16

x /= 4; // x = x / 4
console.log(x); // 4

// Comparison
// == === != !== > < >= <=
let num1 = 10;
let num2 = "10";

console.log(num1 == num2);  // true (loose equality, type conversion)
console.log(num1 === num2); // false (strict equality, no type conversion)
console.log(num1 != num2);  // false
console.log(num1 !== num2); // true
console.log(num1 > 5);      // true
console.log(num1 <= 10);    // true

// Logical
// && || !
let isOnline = true;
let isAdmin = false;

console.log(isOnline && isAdmin); // false (AND)
console.log(isOnline || isAdmin); // true (OR)
console.log(!isOnline);           // false (NOT)

// Ternary
let msg = isOnline ? "Yes" : "No"; // "Yes" if isOnline is true, otherwise "No"

// Nullish Coalescing
// userName will be input if it is not null or undefined, otherwise "Default"
let userName = input ?? "Default"; 

// ==============================
// 4. Conditionals
// ==============================
if (x > 10) {
  // ...
} else if (x === 10) {
  // ...
} else {
  // ...
}

switch (fruit) {
  case "apple":
    // ...
    break;
  case "banana":
    // ...
    break;
  default:
    // ...
    break;
}

// ==============================
// 5. Loops
// ==============================
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (condition) {
  // ...
}

do {
  // ...
} while (condition);

for (let item of arr) {
  console.log(item);
}

for (let key in obj) {
  console.log(key);
}

// ==============================
// 6. Functions
// ==============================
function sayHi(name) {
  return `Hi ${name}`;
}
// Arrow function
const sayHiArrow = (name) => `Hi ${name}`;

// ==============================
// 7. Arrays
// ==============================
let exampleArr = [1, 2, 3];

// ==============================
// Add, remove, and modify elements
// ==============================
// Add an element to the end of the array
exampleArr.push(4); 
// [1, 2, 3, 4]

// Remove the last element from the array
exampleArr.pop(); 
// [1, 2, 3]

// Add an element to the beginning of the array
exampleArr.unshift(0); 
// [0, 1, 2, 3]

// Remove the first element from the array
exampleArr.shift(); 
// [1, 2, 3]

// ==============================
// Search and find
// ==============================
// Check if the array includes a specific element
exampleArr.includes(2); 
// true

// Get the index of a specific element
exampleArr.indexOf(3); 
// 2

// Find the first element that matches a condition
exampleArr.find(num => num > 2); 
// 3

// ==============================
// Transform and filter
// ==============================
// Create a new array with each element multiplied by 2
let mappedArr = exampleArr.map(num => num * 2); 
// [2, 4, 6]

// Filter the array to include only elements greater than 1
let filteredArr = exampleArr.filter(num => num > 1); 
// [2, 3]

// ==============================
// Concatenate and spread
// ==============================
// Concatenate two arrays into a new array
let newArr = exampleArr.concat([4, 5]); 
// [1, 2, 3, 4, 5]

// Use the spread operator to create a new array
let spreadArr = [...exampleArr, 4, 5]; 
// [1, 2, 3, 4, 5]

// ==============================
// Slice and splice
// ==============================
// Extract a portion of the array into a new array
let slicedArr = exampleArr.slice(1, 3); 
// [2, 3]

// Remove and/or replace elements in the array
exampleArr.splice(1, 1, 9); 
// [1, 9, 3]

// ==============================
// Flatten and remove duplicates
// ==============================
// Flatten a nested array into a single-level array
let nestedArr = [1, [2, [3, 4]]];
let flatArr = nestedArr.flat(Infinity); 
// [1, 2, 3, 4]

// Remove duplicate elements from an array
let uniqueArr = [...new Set([1, 2, 2, 3, 3, 4])]; 
// [1, 2, 3, 4]



// ==============================
// Iterate over an array
// ==============================
// Using a for loop
for (let i = 0; i < exampleArr.length; i++) {
    console.log(exampleArr[i]);
  }
  // Logs: 1, 2, 3
  
  // Using a for...of loop
  for (let num of exampleArr) {
    console.log(num);
  }
  // Logs: 1, 2, 3
  
  // Using forEach
  exampleArr.forEach(num => console.log(num));
  // Logs: 1, 2, 3
  
  // Using map (to create a new array while iterating)
  let doubledArr = exampleArr.map(num => num * 2);
  // [2, 4, 6]
  
  // Using reduce (to accumulate values while iterating)
  let sum = exampleArr.reduce((acc, num) => acc + num, 0);
  // 6

  
// Sort and reverse
exampleArr.reverse(); // [1, 2, 3]
// ==============================
// 1. Default Sorting (Strings)
// ==============================
// By default, `sort()` converts elements to strings and sorts them lexicographically.
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
// ["apple", "banana", "cherry"]

// ==============================
// 2. Sorting Numbers (Ascending)
// ==============================
// When sorting numbers, you need a compare function because the default behavior converts numbers to strings.
let numbers = [10, 5, 20, 15];
numbers.sort((a, b) => a - b); // Ascending order
// [5, 10, 15, 20]

// ==============================
// 3. Sorting Numbers (Descending)
// ==============================
// To sort numbers in descending order, reverse the comparison.
numbers.sort((a, b) => b - a); // Descending order
// [20, 15, 10, 5]

// ==============================
// 4. Sorting Strings (Case-Sensitive)
// ==============================
// By default, `sort()` is case-sensitive, so uppercase letters come before lowercase letters.
let words = ["Banana", "apple", "Cherry"];
words.sort();
// ["Banana", "Cherry", "apple"]

// ==============================
// 5. Sorting Strings (Case-Insensitive)
// ==============================
// To sort strings in a case-insensitive manner, use `localeCompare()`.
words.sort((a, b) => a.localeCompare(b));
// ["apple", "Banana", "Cherry"]

// ==============================
// 6. Sorting Objects by a Numeric Property
// ==============================
// You can sort an array of objects by a specific numeric property.
let users = [
  { name: "Roy", age: 39 },
  { name: "Eva", age: 30 },
  { name: "Luna", age: 25 }
];
users.sort((a, b) => a.age - b.age); // Ascending by age
// [
//   { name: "Luna", age: 25 },
//   { name: "Eva", age: 30 },
//   { name: "Roy", age: 39 }
// ]

// ==============================
// 7. Sorting Objects by a String Property
// ==============================
// You can sort an array of objects by a specific string property.
users.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical by name
// [
//   { name: "Eva", age: 30 },
//   { name: "Luna", age: 25 },
//   { name: "Roy", age: 39 }
// ]

// ==============================
// 8. Sorting with Mixed Data Types
// ==============================
// If the array contains mixed data types, you can define custom logic in the compare function.
let mixed = [10, "apple", 5, "banana"];
mixed.sort((a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b; // Sort numbers
  } else {
    return a.toString().localeCompare(b.toString()); // Sort strings
  }
});
// [5, 10, "apple", "banana"]

// ==============================
// 10. Sorting Nested Arrays
// ==============================
// You can sort arrays that contain nested arrays by accessing specific elements.
let nested = [[1, "b"], [3, "a"], [2, "c"]];
nested.sort((a, b) => a[0] - b[0]); // Sort by the first element
// [[1, "b"], [2, "c"], [3, "a"]]

// ==============================
// 11. Sorting Dates
// ==============================
// You can sort an array of dates by converting them to timestamps.
let dates = [
  new Date("2025-03-31"),
  new Date("2023-01-01"),
  new Date("2024-06-15")
];
dates.sort((a, b) => a - b); // Ascending order
// [
//   new Date("2023-01-01"),
//   new Date("2024-06-15"),
//   new Date("2025-03-31")
// ]

// ==============================
// 12. Sorting Booleans
// ==============================
// You can sort an array of booleans by treating `true` as `1` and `false` as `0`.
let bools = [true, false, true, false];
bools.sort((a, b) => a - b);
// [false, false, true, true]

// ==============================
// 13. Sorting with Multiple Criteria
// ==============================
// You can sort by multiple criteria by chaining comparisons.
let people = [
  { name: "Roy", age: 39 },
  { name: "Eva", age: 30 },
  { name: "Eva", age: 25 }
];
people.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age; // Sort by age if names are the same
  }
  return a.name.localeCompare(b.name); // Sort by name
});
// [
//   { name: "Eva", age: 25 },
//   { name: "Eva", age: 30 },
//   { name: "Roy", age: 39 }
// ]

// ==============================
// 8. Objects
// ==============================
let user = {
    name: "Eva",
    age: 30,
    greet() {
      return "Hi!";
    }
  };
  
  console.log(user.name); // "Eva"
  console.log(user["age"]); // 30
  
  // Destructuring the object
  let { name, age } = user;
  // name = "Eva", age = 30
  
  // ==============================
  // 9. Spread & Rest
  // ==============================
  // Copying the object using the spread operator
  let copy = { ...user };
  // copy = { name: "Eva", age: 30, greet: [Function: greet] }
  
  // Using the spread operator with arrays
  let nums = [1, 2, ...[3, 4]];
  // nums = [1, 2, 3, 4]
  
  // Using the rest operator in a function
  function sum(...args) {
    return args.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
  }
  let total = sum(1, 2, 3, 4); // 10

// ==============================
// 10. Classes
// ==============================
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} says hi`);
  }
}

let dog = new Animal("Luna");

// ==============================
// 11. Promises / Async
// ==============================
fetch('https://api.example.com')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

async function getData() {
  try {
    let res = await fetch('https://api.example.com');
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// ==============================
// 12. Dates
// ==============================
let now = new Date();
now.getFullYear(); // Current year (e.g., 2025)
now.getMonth(); // 0-based month (e.g., 2 for March)
now.toISOString(); // ISO string format (e.g., "2025-03-31T12:00:00.000Z")

// ==============================
// 13. String Methods
// ==============================
let txt = "Hello JS";
txt.length; // 8 (number of characters in the string)
txt.toUpperCase(); // "HELLO JS" (convert to uppercase)
txt.toLowerCase(); // "hello js" (convert to lowercase)
txt.includes("JS"); // true (checks if "JS" is in the string)
txt.replace("JS", "Roy"); // "Hello Roy" (replace "JS" with "Roy")
txt.slice(0, 5); // "Hello" (extract characters from index 0 to 4)
txt.split(" "); // ["Hello", "JS"] (split the string into an array by spaces)
txt.indexOf("J"); // 6 (index of the first occurrence of "J")

// ==============================
// 14. Math
// ==============================
Math.floor(1.9); // 1 (rounds down to the nearest integer)
Math.ceil(1.1); // 2 (rounds up to the nearest integer)
Math.round(1.5); // 2 (rounds to the nearest integer)
Math.random(); // Random number between 0 (inclusive) and 1 (exclusive)
Math.max(1, 3, 2); // 3 (returns the largest number)
Math.min(1, 3, 2); // 1 (returns the smallest number)

// ==============================
// 15. DOM Basics
// ==============================
document.getElementById("id");
document.querySelector(".class");

element.addEventListener("click", () => {
  alert("Clicked!");
});

element.textContent = "Hola";
element.style.color = "red";

// ==============================
// 16. Modules
// ==============================
// Exporting
export const greet = () => "Hola";
export default function App() {
  return "App running";
}

// Importing
import App from './App.js';
import { greet } from './utils.js';

// ==============================
// 17. Error Handling
// ==============================
try {
  throw new Error("Oops");
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Always runs");
}

// ==============================
// 17. Map
// ==============================
let map = new Map();
map.set("name", "Eva");
map.set("age", 30);
map.set("isAdmin", true);
console.log(map.get("name")); // "Eva"
console.log(map.has("age")); // true
map.delete("isAdmin"); // true
console.log(map.size); // 2
map.forEach((value, key) => console.log(`${key}: ${value}`));

// ==============================
// 18. Set
// ==============================
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate values are ignored
console.log(set.has(2)); // true
set.delete(3); // true
console.log(set.size); // 2
set.forEach(value => console.log(value));