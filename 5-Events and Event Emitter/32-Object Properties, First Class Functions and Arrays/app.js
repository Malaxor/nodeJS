
// object properties and methods
const obj = {
   greet: 'Hello'
};
console.log(obj.greet);
console.log(obj['greet']);
let prop = 'greet';
console.log(obj[prop]);

// arrays
const arr = [];
// adding a function to an array
arr.push(() => console.log('Hello, World 1'));
arr.push(() => console.log('Hello, World 2'));
arr.push(() => console.log('Hello, World 3'));
// iterating through the array; invoking each function
arr.forEach(item => item());