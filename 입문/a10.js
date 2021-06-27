"use strict";

console.log("조건문 연습");

let result = true;
if (result) console.log("result 가 ture 입니다");
if (!result) console.log("result 가 false 입니다.");
if (result) {
  console.log("result 의 결과");
  console.log(">> 참 입니다.");
}

switch (result) {
  case "true":
    console.log("result true");
    break;
  case "false":
    console.log("result false");
    break;
  default:
    console.log(`result = ${result}`);
}
