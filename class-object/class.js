'use strict';

// Class (붕어빵 틀)
// template, declare once, no data in

// Object (팥붕어빵, 크림붕어빵, 피자붕어빵 등)
// instance of a class, created many times, data in

// 1. Class declarations
class Person {
  // constructor (생성자)
  constructor(name, age) {
    // fields (속성)
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative')
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
class Experiment {
  publicFeild = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicFeild); // 2
console.log(experiment.privateFeild); // undefined


// 4. Static properties and methods
class Article {
  static publisher = 'Dream Coding';
  constructor(articlNumber) {
    this.articlNumber = articlNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class.
// 공통된 부분을 만들고 재사용하기에도 좋고 유지보수에도 용이함
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 것도 부르고 싶다면 super 사용
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle, color: ${this.color}`
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true, javaScript의 모든 object는 Object를 상속한 것
console.log(triangle.toString());