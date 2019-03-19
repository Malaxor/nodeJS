// not a good way of using exports
// the object that exports and module.exports point to has to be mutated in order for us to use exports instead of module.exports
// exports is just shorthand way of exporting.
// this way, which is incorrent, points the exports object to something else
exports = function() {
   console.log('Hello');
}
console.log(exports);
console.log(module.exports);