// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

foo.ancestors = function() {
  let ancestors = [];
  ancestors.push(Object.getPrototypeOf(this));
  
  while(ancestors[ancestors.length - 1] !== Object.prototype) {
    ancestors.push(Object.getPrototypeOf(ancestors[ancestors.length - 1]));
  }
  
  return ancestors.map(ancestor => {
    return ancestor.name;
  });
};

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']