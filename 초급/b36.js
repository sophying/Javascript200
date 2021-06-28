"use strict";

function sum() {
  let total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(`arguments instanceof Array  : ${arguments instanceof Array}`);
  return total;
}

let sumOf1to3 = sum(1, 2, 3);
console.log(`sumOf1to3 : ${sumOf1to3}`);

function testArg() {
  let newArr = Array.prototype.slice.call(arguments);
  console.log(newArr);
  console.log(`newArr.indexOf("b") : ${newArr.indexOf("b")}`);
  console.log(arguments.indexOf("b")); // arguments 는 배열이 아니므로 indexOf 활용 안됨 Error 발생
}

testArg("a", "b");
