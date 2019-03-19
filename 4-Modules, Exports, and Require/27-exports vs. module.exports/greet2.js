// mutating the exports object preserves the reference 
/// exports and module.exports now, by having been mutated with the dot greet property being added, point to the same object
exports.greet = function() {
   console.log('Hello');
}
console.log(exports);
console.log(module.exports);