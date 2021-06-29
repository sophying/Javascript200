'use strict';

const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good night!';
const str4 = '- The Truman Show, 1998';
console.log(str1.concat(str2, str3, str4));

// 그러나 + 연산자가 concat 보다 성능이 좋으므로 + 권장 