
const person = {

   firstName: '',
   lastName: '',
   greet() {
      return this.firstName + ' ' + this.lastName;
   }
};
const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';
console.log(john.greet());