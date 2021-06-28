"use strict";

console.log("5" + 1); // String
console.log("5" - 1); // number  4
console.log("5" * 2); // number 10
console.log("there is " + 5); // String
console.log("five" + 2); // String

console.log(" - 연산자를 활용한 자료형 변환");
let str = 5 + "1";
console.log(str);
console.log(typeof str);

let num = +str;
console.log(` num = +str =>  ${num}`);
console.log(`typeof num =>  ${typeof num}`);

console.log("- 함수를 활용한 자료형 변환");
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);
