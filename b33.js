"use strict";

const symbol = Symbol();
const hello = Symbol("hello");

console.log(Number(3) === Number(3)); // ture
console.log(Symbol("symbol") === Symbol("symbol")); // false
console.log(Symbol() === Symbol()); // false
console.log(typeof Symbol()); // Symbol

const nationality = Symbol("nationality");
const user = { name: "jay" };
user[nationality] = "korean";
console.log(user[nationality]); // korean

for (let key in user) {
  console.log(key); // name
}

console.log(Object.keys(user)); // name
console.log(Object.getOwnPropertyNames(user)); // name

console.log(JSON.stringify(user)); // "name":"jay"

const symbolProperties = Object.getOwnPropertySymbols(user); // Symbol(nationality)
console.log(symbolProperties); // Symbol(nationality)
console.log(user[symbolProperties[0]]); // korean
