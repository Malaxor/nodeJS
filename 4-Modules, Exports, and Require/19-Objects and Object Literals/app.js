
const person = {

   firstName: 'John',
   lastName: 'Doe',
   greet() {
      console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
   }
}
person.greet();
console.log(person['firstName']);