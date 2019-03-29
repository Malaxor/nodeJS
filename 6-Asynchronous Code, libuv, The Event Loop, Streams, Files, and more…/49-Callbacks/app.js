
function greet(callback) {

   console.log('Hello');
   const data = {
      name: 'John Doe'
   };
   callback(data);
}

greet(data => {

   console.log('The callback was invoked!');
   console.log(data);
});

greet(data => {
   console.log('A different callback was invoked') 
   console.log(data.name)
});