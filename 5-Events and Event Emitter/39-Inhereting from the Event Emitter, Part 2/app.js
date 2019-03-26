const EventEmtr = require('events');
const util = require('util');

function Greet() {
   
   EventEmtr.call(this);
   this.greeting = 'Hello, World!';
}
// all object instantions from the Greet constructor will inherit just the methods (not the properites) from the EventEmitr object
util.inherits(Greet, EventEmtr);

Greet.prototype.greet = function(data) {

   console.log(this.greeting + ': ' + data);
   // the emit method was inherited from the EventEmtr object
   this.emit('greet', data);
}
const greet1 = new Greet();
greet1.on('greet', data => console.log('Someone greeted: ' + data));

greet1.greet('Philip');

console.log(greet1);