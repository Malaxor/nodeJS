
const EventEmtr = require('events');

module.exports = class Greetr extends EventEmtr {

   constructor() {
      super();
      this.greeting = 'Hello, world';
   }
   greet(data) {
      console.log(`${this.greeting}: ${data}`);
      this.emit('greet', data);
   }
}