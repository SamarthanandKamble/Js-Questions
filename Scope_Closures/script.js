/*function outerFunction(outerVar) {
    function innerFunction(innerVar) {
      console.log(outerVar + " " + innerVar); // I am outer and I am inner
    }
  
    return innerFunction;
  }
  
  var closureExample = outerFunction("I am outer");
  closureExample("and I am inner");
*/

/*
function clickCounter() {
  var count = 0;

  function handleClick() {
    count++;
    console.log("Button clicked " + count + " times"); // count = 2
  }

  return handleClick;
}

var buttonClick = clickCounter();
buttonClick();
buttonClick();
*/

/*
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Incorrect: " + i);  // i :6
  }, 1000);
}

for (let j = 1; j <= 5; j++) {
  setTimeout(function () {
    console.log("Correct: " + j);
  }, 1000);
}
*/

/*
function outer() {
  var outerVar = "I am outer";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

var closureExample = outer();
closureExample(); 
*/

/*
(function () {
  var privateVar = "I am private";
  console.log(privateVar);
})();
console.log(privateVar); // rReference Error
*/

/*
function fetchData(url, callback) {
    setTimeout(function () {
      var data = "Data fetched from " + url;
      callback(data);
    }, 1000);
  }
  
  function displayData(data) {
    console.log(data); //Data fetched from example.com/api
  }
  
  fetchData("example.com/api", displayData);
  */

/*
var counterModule = (function () {
  var count = 0;

  function incrementFun() {
    count++;
    console.log("Count: " + count);
  }

  function decrementFun() {
    count--;
    console.log("Count: " + count);
  }

  return {
    increment: incrementFun,
    decrement: decrementFun,
  };
})();

counterModule.increment();
counterModule.decrement();
*/

/*
function curry(a) {
  return function(b) {
    return function(c) {
      console.log(a + b + c);
    };
  };
}

var curriedSum = curry(1)(2);
curriedSum(3);
*/

/*
function outer() {
    var outerVar = "I am outer";
  
    function middle() {
      var middleVar = "I am middle";
  
      function inner() {
        console.log(outerVar + " " + middleVar);
      }
  
      return inner;
    }
  
    return middle();
  }
  
  var closureExample = outer();
  closureExample();
*/

/*
function outer() {
  var outerVar = "I am outer";

  function inner() {
    console.log(outerVar + " " + this.innerVar);
  }

  return inner;
}

var closureExample = outer();
closureExample.call({ innerVar: "and I am inner" });
*/

/*
function multiply(a, b) {
  return a * b;
}

function partialMultiply(a) {
  return function (b) {
    return multiply(a, b);
  };
}

var double = partialMultiply(2);
console.log(double(5)); // Output: 10
*/

/*
function memoize() {
  var cache = {};
  return function (n) {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result for:", n);
      var result = n * n;
      cache[n] = result;
      return result;
    }
  };
}
var memoizedSquare = memoize();
console.log(memoizedSquare(5));
console.log(memoizedSquare(5)); // Output: Fetching from cache: 5
*/
