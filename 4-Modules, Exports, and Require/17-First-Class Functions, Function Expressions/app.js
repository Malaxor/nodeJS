
const moduleGreet = require('./greet');
moduleGreet();

// function statement 
function greet() {
   console.log('Hello');
}
greet();

// example of first class function
function logGreeting(fn) {
   fn();
}
logGreeting(() => {
   console.log('Hello, again');
});

// function expression
const greetMe = function() {
   console.log('Yo, guy!');
}();