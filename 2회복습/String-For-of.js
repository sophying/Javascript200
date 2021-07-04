const str = "Hello";

for (const item of str) {
  console.log(item);
}
// iterator 반복자
const iterator = str[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
