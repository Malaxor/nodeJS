
// json files aren't explicitly exported (no need to module.export anything from the file)
const greetings = require('./greetings.json');

function greet() {
   console.log(greetings.en);
}
module.exports = greet;