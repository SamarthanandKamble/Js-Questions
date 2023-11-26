/*
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`Woof, my name is ${this.name}!`);
};

const dog1 = new Dog("Buddy");
const dog2 = new Dog("Max");

dog1.bark();
dog2.bark();
*/

/*

Add a getter method named average to the Array prototype that calculates and returns the average of the elements in the array. Do not use a traditional method, use a getter.


Object.defineProperty(Array.prototype, 'average', {
  get: function () {
    if (this.length === 0) {
      return undefined; // Handle empty array case
    }
    const sum = this.reduce((acc, val) => acc + val, 0);
    return sum / this.length;
  }
});

*/

/*
Extend the Array prototype with a method called forEachAsync that takes a callback function as a parameter and executes the callback asynchronously for each element in the array, using setTimeout or another asynchronous mechanism.


Array.prototype.forEachAsync = function () {
  let arr = this;
  setTimeout(() => cb(arr.values()));
};

function cb(iterable) {
  for (const iterator of iterable) {
    console.log(iterator);
  }
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEachAsync(function (x) {
  console.log(x);
});
*/

//https://chat.openai.com/share/6692a5e3-19d0-45d2-85f6-b855a15adc8c

/*
const obj1 = { x: 10 };
const obj2 = { y: 20 };

function extend(obj1, obj2) {
  let extendedObj = {};
  extendedObj.__proto__ = obj1;
  for (const key in obj2) {
    if (obj2.hasOwnProperty.call(obj2, key)) {
      extendedObj[key] = obj2[key];
    }
  }
  return extendedObj;
}

const extendedObj = extend(obj1, obj2);

console.log(extendedObj.x); // Should print 10
console.log(extendedObj.y); // Should print 20

/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function (name, age) {
  console.log(`${this.name},${this.age}`);
};

const john = new Person("John", 25);
john.greet(); // Should print "Hello, John!"

*/

/*
function Animal(name, breed) {
  this.name = name;
  Dog.call(this, breed);
}

function Dog(breed) {
  // Animal.call(this, name);
  this.breed = breed;
}

CASE 1:
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// const myDog = new Dog("Buddy", "Golden Retriever");
// console.log(myDog.name);

CASE 2: 
Animal.prototype = Object.create(Dog.prototype);
Animal.prototype.constructor = Animal;

const myAnimal = new Animal("Duggu", "Golden Retriever");
console.log(myAnimal.breed);
*/

/*
Array.prototype.calculateArea = function () {
  let arr = this;
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    result += arr[index];
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.calculateArea()); // Should print 15
*/

/*
function Vehicle(drive) {
  this.drive = drive;
}
function Car(drive) {
  this.drive = drive;
}
function ElectricCar(drive) {
  this.drive = drive;
}

const car1 = new Car("Driving car");
car1.__proto__ = Vehicle.prototype;

const ec = new ElectricCar("Driving electric car");
ec.__proto__ = Car.prototype;

const v1 = new Vehicle("Driving vehicle");

console.log(car1.drive);

*/

