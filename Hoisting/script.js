/*
function outer() {
  console.log(inner()); // I am inside!
  function inner() {
    return "I am inside!";
  }
}
outer();
*/

/*
console.log(foo()); // Type Error
var foo = () => {
  return "Arrow function hoisting!";
};
*/

/*
var x = 1;
if (true) {
  console.log(x); // 1
  var x = 2;
  console.log(x); // 2
}
console.log(x); // 2
*/

/*
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a); // 1
*/

/*
console.log(hoistedVar); // undefined
console.log(hoistedFunc()); // Function hoisted!
var hoistedVar = "I am hoisted!";
function hoistedFunc() {
  return "Function hoisted!";
}
*/

/*
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 0,1,2
  }, 1000);
}
*/

/*
console.log(globalVar); // undefined
if (true) {
  console.log(globalVar); // undefined?
  var globalVar = "I am global!";
}
console.log(globalVar); // I am global
*/

/*
function example() {
    // console.log(a); // TDZ
    let a = 10;
    console.log(a); // 10
}
example();
*/

/*

console.log(a); // undefined
var a = 10;
if (true) {
  //  1) console.log(a); // TDZ
  //  2) console.log(a); // 10

  //  1) let a = 20;
  // 2) var a = 20;
  console.log(a); // 20
}
console.log(a); // 20
*/

/*
function example() {
  console.log(a()); // "Function A"
  //   console.log(b()); // TypeError : b is not a function
  //   console.log(c()); // TypeError : c is not a function
  function a() {
    return "Function A";
  }
  var b = function () {
    return "Function B";
  };
  var c = () => "Function C";
}
example();
*/

/*
var myClassInstance = new MyClass(); // cannot access MyClass before initialization
class MyClass {
  constructor() {
    this.myProperty = "Hello, hoisting!";
  }
}
console.log(myClassInstance.myProperty); // Reference Error
*/

/*
function example() {
  console.log(a); // Reference Error : a is not defined
  if (true) {
    let a = 5;
    console.log(a); // 5
  }
  console.log(a); // Reference Error : a is not defined
}
example();
*/

/*
var a = 5;
function outer() {
  console.log(a); // 5
  function inner() {
    var a = 10;
    console.log(a); // 10
  }
  inner();
  console.log(a); // 5
}
outer();
*/

/*
var x = 20;
function hoistExample() {
  console.log(x); // undefined
  if (false) {
    var x = 30;
  }
  console.log(x); // undefined
}
hoistExample();
*/
