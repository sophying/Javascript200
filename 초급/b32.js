"use strict";
/* 
let obj = { a: 1, b: 2, c: 30, d: 50, e: 5 };

let { a, c } = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

// a 의 속성이 undefined 일 경우 newA = 10 의 값을 할당한다는 의미
// a 의 속성 값 1이 주어져있으므로 1이 출력됨.
let { a: newA = 10, f: newF = 5 } = obj;
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);
 */
console.clear();

let arr = [1, 2, 3, 4, 5];

let [b, d, ...rest] = arr;
console.log(`0) b >>> ${b}`); //1
console.log(`0) d >>> ${d}`); // 2
console.log(`0) rest >>> ${rest}`); // 3,4,5

let [a = 10, f = 9] = [1];
console.log(`1) a >>> ${a}`); // 1   a의 값을 1로 할당
console.log(`1) f >>> ${f}`); // 9   f의 값이 원래 없었으므로 9가 할당

[a, f] = [f, a];
console.log(`2) a >>> ${a}`); // 9
console.log(`2) f >>> ${f}`); // 1

function getArr() {
  return [1, 2, 3, 4, 5, 6];
}
[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`); // 1
console.log(`3) f >>> ${f}`); //6
