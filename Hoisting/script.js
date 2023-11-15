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
