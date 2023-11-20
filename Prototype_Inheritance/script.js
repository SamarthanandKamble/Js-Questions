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
