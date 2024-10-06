'use strict';
// Fun quiz time🩷
// function calculate(command, a, b)

function calculate(command, a, b) {
  if (command === 'add') return a + b;
  else if (command === 'substract') return a - b;
  else if (command === 'divide') return a / b;
  else if (command === 'multiply') return a * b;
  else return 'UNDEFINED'
}

console.log(calculate('other', 2, 3));

// 정해진 데이터를 처리하는 경우에는 switch가 더 좋음
function calculate2(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    default:
      throw Error('unknown command')
  }
}

console.log(calculate2('add', 2, 3));