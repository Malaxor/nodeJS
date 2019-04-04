const fs = require('fs');
// synchronous approach
const hello = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(hello);

// async approach
fs.readFile('greet.txt', (err, data) => {
   err ? console.log(err) : console.log(data);
});
console.log('done');