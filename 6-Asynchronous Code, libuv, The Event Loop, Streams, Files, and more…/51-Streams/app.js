const fs = require('fs');

const readable = fs.createReadStream(
	__dirname + '/greet.txt', 
	{ encoding: 'utf8', highWaterMark: 64 * 1024 }
);

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', chunk => {
   console.log(chunk.length);
   writable.write(chunk);
});