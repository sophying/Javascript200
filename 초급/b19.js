"use strict";

let value = null;
console.log(value);

console.log(`null: 비어있는 값, 존재하지 않는 값 - typeof : ${typeof value}`);

let value2;
console.log(value2);
console.log(
  `undefined: 아무 값도 할당받지 않은 상태 - typeof : ${typeof value2}`
);

console.log(null == undefined); // true
console.log(null === undefined); // false
