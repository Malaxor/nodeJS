// core module
const util = require('util');

const name = 'Phil';
const greeting = util.format('Hello, %s', name);

util.log(greeting);