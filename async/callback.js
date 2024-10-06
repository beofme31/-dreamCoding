'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration

console.log('1');
// setTimeout: Browser API
setTimeout(() => console.log('2'), 1000);
console.log('3');