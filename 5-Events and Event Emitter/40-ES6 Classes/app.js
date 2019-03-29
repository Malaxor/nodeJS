
const EventEmtr = require('events');
const util = require('util');

class Person {

   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }
   greet() {
      console.log(`Hello! I'm ${this.firstName} ${this.lastName}.`);
   }
}
const philip = new Person();
philip.greet();