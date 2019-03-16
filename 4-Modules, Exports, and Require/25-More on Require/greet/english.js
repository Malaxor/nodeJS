// json files aren't explicitly exported  
const greetings = require('./greetings.json');

function greet() {
   console.log(greetings.en);
}
module.exports = greet;