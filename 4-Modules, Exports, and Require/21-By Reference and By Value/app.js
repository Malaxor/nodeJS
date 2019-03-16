
// by value

function change(b) {
   b = 2;
}
const a = 1;
change(a);
console.log(a);

let c = 30;
let d = c;
c = 'hello';
console.log(d);

// by reference

function changeObj(e) {

   e.prop1 = function() {};
   e.prop2 = {};
}

const f = {};
f.prop1 = {};
changeObj(f);
console.log(f);