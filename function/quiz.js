'use strict';
// Fun quiz time🩷
// function calculate(command, a, b)

function calculate(command, a, b) {
  if (command === add) return a + b;
  else if (command === substract) return a - b;
  else if (command === divide) return a / b;
  else if (command === multiply) return a * b;
  else return 'UNDEFINED'
}