"use strict";

let number = 2;

switch (number) {
  case 1:
    console.log(`number is 1`);
    break;

  case 2:
    console.log(`number is 2`);
    break;

  default:
    console.log(`switch case `);
}

if (number == 1) console.log(`number 는 1 입니다`);
else if (number == 2) console.log(`number 는 2 입니다`);
else if (number == 3) console.log(`number 는 3 입니다`);
else console.log(`number 는 1,2,3  모두 해당 되지 않습니다.`);
