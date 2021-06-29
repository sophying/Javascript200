
const map = new Map();

map.set('one', 1);
map.set('two', 2);

console.log(map.get('one')); // 1
console.log(map.has('one')); // true
map.delete('one');

console.log(map.has('one')); // false
console.log(map.has('two')); // true