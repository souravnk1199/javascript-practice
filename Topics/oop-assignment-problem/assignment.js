class Course {
  #price;

  get price() {
    return "$" + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw "Invalid Value!";
    }
    this.#price = value;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  lengthPerUnit() {
    return (this.length / this.#price).toFixed(2);
  }

  courseSummary() {
    console.log(`Name: ${this.title}`);
    console.log(`Length: ${this.length}Hrs`);
    console.log(`Price: $${this.price}`);
    console.log(`Length Per $: ${this.lengthPerUnit()}hrs`);
  }
}

class PracticalCourse extends Course {
  numOfExercises;
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
  courseSummary() {
    console.log(`Name: ${this.title}`);
    console.log(`Length: ${this.length}Hrs`);
    console.log(`Price: $${this.price}`);
    console.log(`Length Per $: ${this.lengthPerUnit()}hrs`);
    console.log(`Number of Exercises: ${this.numOfExercises}`);
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log(`${this.title} Theretical Course is published.`);
  }
}

const course1 = new PracticalCourse("JavaScript", 50, 10.99, 35);
const course2 = new TheoreticalCourse("React", 40, 15.99);

course1.courseSummary();
course2.courseSummary();
course2.publish();
