/*
// How is 'this' affected in a callback function passed to Array.forEach()?
const numbers = [1, 2, 3];

const object = {
  value: 10,
  multiply: function () { 
    numbers.forEach(function (num) {
      console.log(num * this.value); // as the "this" is bind with the global scope.
    });
    console.log(this.value); //10
  },
};

object.multiply();
*/

/*
// What will be the output of the following code and why?
const obj = {
  value: "Hello",
  async printValue() {
    console.log(this.value); // undefined ?????????????????????????????????
  },
};

setTimeout(obj.printValue, 1000);
*/

/*
// Explain how 'this' works in the context of the prototype chain.
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.sayHello(); // Hello, Alice
person2.sayHello(); //Hello, Bob
*/

/*
// How can you remove an event listener using 'this' inside the event handler?
const button = document.getElementById("myButton");

function clickHandler() {
  console.log("Button clicked!");
  this.removeEventListener("click", clickHandler);????????????????????????????????????
}

button.addEventListener("click", clickHandler);
*/

/*
// Explain the value of 'this' in the context of arrow functions and lexical scope.
const outerFunction = () => {
  const innerFunction = () => {
    console.log(this); // window obj ????????????????????????????????????????????????
  };
  innerFunction();
};

outerFunction();
*/

/*
// What happens to 'this' when using the 'new' keyword with constructor functions?
function Animal(sound) {
  this.sound = sound;
  this.makeSound = function () {
    console.log(this.sound); //Meow
  };
}

const cat = new Animal("Meow");
cat.makeSound();
*/

/*
// How is the 'apply' method different from 'call' when it comes to setting 'this'?

function displayInfo(info1, ...info2) {
  console.log(info1 + " " + this.name + " " + info2);
}

const employee = { name: "Sam" };
displayInfo.apply(employee, [
  "is working on",
  "today.",
  "todayyyy1.",
  "todayyyy2.",
  "todayyyy3.",
  "todayyyy4.",
]);
*/

/*
// How does the 'call' method allow you to explicitly set the value of 'this'?
function introduce(greeting) {
  console.log(greeting + ", " + this.name);
}

const student = { name: "Alex" };
introduce.call(student, "Hi");
*/

/*
// How is 'this' determined in the context of implicit binding?
const person = {
  name: "Jane",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const anotherPerson = {
  name: "Bob",
  greet: person.greet,
};

person.greet();
anotherPerson.greet();
*/

/*
// What will be the output of the following code?
function globalFunction() {
  console.log(this); // window obj
}

globalFunction();
*/

/*
// How can you ensure that 'this' refers to a specific object using binding?
const user = {
  name: "Alice",
  sayHello: function (first, second, ...third) {
    this.first = first;
    this.second = second;
    this.third = third;
    console.log(
      "Hello, " +
        this.first +
        "," +
        this.second +
        "," +
        this.name +
        "," +
        this.third
    );
  },
};

const userTwo = {
  name: "Samarthanand",
};
user.sayHello.apply(userTwo, ["as", "asda", "asdasd", "aca", "asdasd", "aca"]);
*/

/*
// Compare the behavior of 'this' in regular functions and arrow functions.
const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value);
  },
  arrowFunction: () => {
    console.log(this.value);
  },
};

obj.regularFunction();
obj.arrowFunction();
*/

/*
// How does 'this' behave in the context of event handlers?
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log(this); // button
});
*/

/*
// Explain the value of 'this' in the context of constructor functions.
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.displayInfo = function () {
    console.log(this.make + " " + this.model);
  };
}

const myCar = new Car("Toyota", "Camry");
myCar.displayInfo();
*/

/*
// What will be the output of the following code?
const person = {
  name: "John",
  sayName: function () {
    console.log(this.name);
  },
};

const say = person.sayName;
say();
*/

/*
// Explain the output and the role of closure in determining the value of 'this'.
function outerFunction() {
  const value = "Outer";
  return function () {
    console.log(this.value);
  };
}

const innerFunction = outerFunction();
innerFunction();
*/

/*
// How does event delegation impact the value of 'this' in the context of event handling?
document.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log(this); // document
  }
});
*/

/*
// Explain the behavior of 'this' inside a promise's then() callback.
const obj = {
  value: "Promise",
  async fetchData() {
    return new Promise((resolve) => {
      resolve(this.value);
      console.log("inside", this);
    });
  },
};

obj.fetchData().then((result) => {
  console.log("then block ,", result);
  console.log(this.value); // What will be logged and why?
});
*/

/*
// How does 'this' work inside ES6 classes and their methods?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  logCount() {
    console.log(this.count);
  }
}

const counter = new Counter();
counter.increment();
counter.logCount();
*/

/*
// Manipulate 'this' in a way that the code logs "Hello, World!".
function greet(message) {
  console.log(message + ", " + this.name + "!");
}

const context = { name: "World" };
const boundGreet = greet.bind(context, "Hello");
boundGreet();
*/
