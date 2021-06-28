"use strict";

let condition = 5 > 10; // false
condition ? console.log("Left") : console.log("Right"); // right
let result = condition
  ? (console.log("삼항 연산식의 첫 번째 표현식 입니다."), "표현식") // result 변수에 "표현식" 이 담김
  : (console.log("삼항 연산식의 두 번째 표현식 입니다."), "표현식2");

console.log(result); // "표현식2"
