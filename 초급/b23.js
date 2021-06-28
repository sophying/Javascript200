"use strict";

// And 논리 연산자 &&
console.log(true && true); // true
console.log(true && false); // false
console.log("문장" == "문장" && 5 == 5); // true
console.log(5 == 5 && "다른문장 1" == "다른문장 2"); // false

// or 논리 연산자 ||
console.log(true || false); // true
console.log(false || false); // false
console.log("문장" == "문장" || 5 == 10); // true

// not 논리 연산자 !
console.log(!true); // false
console.log(!false); // true
console.log(!5);
console.log(!"문장");
console.log(!!5);
console.log(!!"문장");

// false  :  false , 0 ,  -0, NaN, null, undefined
