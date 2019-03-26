
const util = require('util');

function Person() {

   this.firstName = 'John';
   this.lastName = 'Doe';
}
Person.prototype.greet = function() {

   console.log(`Hello! I'm ${this.firstName} ${this.lastName}.`);
}

function PoliceMan() {
   // "this" is refering to an instantion of the PoliceMan object
   // Person.call runs the Person function constructor -->
   // and attaches an empty object when the new PoliceMan() constructor is ran
   Person.call(this);
   this.badgeNumber = '1234';
}
// util.inherits only connects the prototypes.
// In this specific case, PoliceMan inherits only the greet method found on the Person prototype.
util.inherits(PoliceMan, Person);

const officer = new PoliceMan();
console.log(officer);