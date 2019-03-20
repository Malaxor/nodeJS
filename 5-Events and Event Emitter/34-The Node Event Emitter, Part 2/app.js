// internal node emitter
const Emitter = require('events');
// using variables instead of strings
const { events } = require('./config');
const emitter = new Emitter();

emitter.on(events.GREET, () => console.log('Somewhere, someone said hello.'));
emitter.on(events.GREET, () => console.log('A greeting occurred.'));

emitter.emit('greet');