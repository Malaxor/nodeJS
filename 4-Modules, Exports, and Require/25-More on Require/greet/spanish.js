
// json files aren't explicitly exported  
const greetings = require('./greetings.json');

function greet() {
   console.log(greetings.es);
}
module.exports = greet;