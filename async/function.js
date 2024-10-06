// Function declaration
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!')

// Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // 더 간편하게 쓸 수 있는 방법
  // for(const args of args) {
  //   console.log(arg);
  // }

  // args.forEach((arg) => console.log(arg);)
}
printAll('dream', 'coding', 'ellie')

// Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
}
printMessage();

// Return a value
function sum(a, b) {
  return a + b;
}

// Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic
  }
}

// good (조건이 안 맞을때는 빨리 return 하고 필요한 logic은 뒤에)
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic
}

// Function expression
const print = function () {
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('Yes!');
}

const printNo = function print() {
  console.log('No!');
  // print();
}
randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

// Arrow function
// const simplePrint = function () {
//   console.log('simplePrint');
// }
const simplePrint = () => console.log('simplePrint'); // return 필요없음
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
}

// IIFE: Immediately Invoked Function Expression
// 최근에는 잘 쓰이지 않지만 바로바로 실행하고 싶을 때, 유용하게 쓰임
(function hello() {
  console.log('IIFE');
})();