// converting the string to binary data, by way of utf8 encoding
const buf = new Buffer.from('Hello', 'utf8'); 
console.log(buf[2]);
// console.log(buf.toString());
// console.log(buf.toJSON());
// console.log(buf[2]);