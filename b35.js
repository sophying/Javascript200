"use strict";

function checkNumber(val) {
  if (typeof val !== "number") throw "유효하지 않은 값입";
  console.log("숫자형 값으로 확인되었습니다.");
}
try {
  checkNumber(100);
  checkNumber("Wrong type"); // Error
} catch (e) {
  console.log(`에러가 발생했습니다 >>> ${e}`); // e: "유효하지 않은 값입"
} finally {
  console.log("success"); // 위에 8 Line Error 가 발생하면 중지 되므로 실행되지않음
}
