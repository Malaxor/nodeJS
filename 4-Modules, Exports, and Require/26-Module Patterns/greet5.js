
const greeting = 'Hello from module 5';

function greet() {
   console.log(greeting);
}
// only exposing the function (variable will still work although it's not being exported)
module.exports = greet;