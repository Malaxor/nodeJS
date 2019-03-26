
const obj = {

   name: 'John Doe',
   greet(param1, param2) {
      console.log(`Hello, ${this.name}.`);
      console.log(param1);
      console.log(param2);
   }
};
obj.greet.call({ name: 'Jane Doe' }, 35, 'NYC');