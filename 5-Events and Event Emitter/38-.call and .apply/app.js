
const obj = {

   name: 'John Doe',
   greet(param1, param2) {
      console.log(`Hello, ${this.name}.`);
      console.log(param1);
      console.log(param2);
   }
};
obj.greet.call({ name: 'Jane Doe' }, 35, 'NYC');

const me = {

   firstName: 'Philip',
   lastName: 'Costache',
   age: 36,
   occupation: 'web developer'
};

const sayHello = function({ city, state }) {

   console.log(`Hello, My name is ${this.firstName} ${this.lastName}; I'm ${this.age}, and I've been a ${this.occupation} for a year.`);
   console.log(city);
   console.log(state);
}.call(me, {city: 'Phoenix', state: 'AZ' });
