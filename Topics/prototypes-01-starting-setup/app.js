class Person {
  name = "Sourav";

  constructor() {
    this.age = 23;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

/* 
function Person() {
  this.name = "Sourav";
  this.age = 23;
  this.greet = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  };
}
*/
const p1 = new Person();
const p2 = new Person();
console.log(p1.__proto__ === p2.__proto__);
