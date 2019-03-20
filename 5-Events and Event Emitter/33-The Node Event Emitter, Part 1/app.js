
const Emitter = require('./emitter');
const emitter = new Emitter();

emitter.on('greet', () => console.log('Somewhere, someone said hello.'));
emitter.on('greet', () => console.log('A greeting occurred.'));

emitter.emit('greet');