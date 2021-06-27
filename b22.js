"use strict";

console.log(5 == 5);
console.log("5" == 5);
console.log(5 == "5");
console.log(5 != 1);
console.log(5 != "1");
console.log(5 === 5); // true
console.log(5 !== 10); // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 <= 6); // true
console.log(5 >= 5); // true

// Z < a
// A < a
// 대문자 < 소문자
// 유니코드 기준에 따라 Binary 연산 처리
console.log("Italy" > "America");
console.log("Korea" < "korea");
