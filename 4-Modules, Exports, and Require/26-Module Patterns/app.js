
// pattern 1
const greet = require('./greet1');
greet();

// pattern 2
const greet2a = require('./greet2').greet;
// or
const greet2b = require('./greet2');
greet2b.greet();

// patern 3
const greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed greeting';

const greet3b = require('./greet3');
greet3b.greet();

// patern 4 
const Greet4 = require('./greet4');
const greet4Obj = new Greet4();
greet4Obj.greet();

// revealing module pattern
const greet5 = require('./greet5');
greet5();