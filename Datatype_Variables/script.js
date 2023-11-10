/*
Example demonstrating Temporal Dead Zone
What happens here?
console.log(a);
let a = 10;
 ans : Reference error due to TDZ.
*/

/*
// Example of local and global scope
let globalVar = "I'm global";

function scopeExample() {
  let localVar = "I'm local";
  console.log(globalVar); //I'm global
  console.log(localVar); //I'm local
}
scopeExample();
*/

/*
// Reassigning a value to a const variable
const pi = 3.14;
pi = 3.14159; // TypeError : as const can't be reassigned
*/

/*
// Object destructuring
const person = { name: "John", gender: "male", age: 30 };
const { name: names, age } = person;
console.log(`Name :${names} , age :${age}`);

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(`first :${first} , second :${second}`);
*/

/*
// Example illustrating variable shadowing
let x = 10;

function shadowExample() {
  let x = 20;
  console.log(x); // 20 : as let and const are block scoped.
}
*/

/*
// Example of block scoping
if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar);
}
console.log(blockVar); // Reference Error
*/

/*
// Example with const and arrays/objects
const numbers = [1, 2, 3];
// numbers = [4, 5, 6]; // Type ERROR , cannot reassign.
numbers.push(4); // it will be pushed coz it is modifying the content of the array, not reassigning the variable numbers
*/

/*
function counterClosure() {
  let counter = 0;
  return {
    increment() {
      counter++;
    },
    getCounter() {
      return counter;
    },
  };
}

const counter = counterClosure();
counter.increment();
console.log(counter.getCounter()); //1
*/
