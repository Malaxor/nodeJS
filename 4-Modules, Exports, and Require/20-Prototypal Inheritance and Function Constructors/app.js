
function Person(firstName, lastName) {
   
   this.firstName = firstName;
   this.lastName = lastName;
}
// this is the prototyp of any object instantiated from the Person constructor function
Person.prototype.greet = function() {

   console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
}

const john = new Person('John', 'Doe');
console.log(john);
john.greet();

const jane = new Person('Jane', 'Doe');
jane.greet();
console.log(john.__proto__);