'use strict';

const sentence = 'the sum will shine on us again';

console.log(sentence.slice(13));  // shine on us again
console.log(sentence.slice(13,24)); //shine on us
console.log(sentence.slice(0)); // the sum will shine on us again
console.log(sentence.slice(0, -23));  //the sum
console.log(sentence.slice(50));  // 인덱스 넘버가 문자열 길이보다 길 경우 정상작동 X
console.log(sentence.slice(7,2));  // 첫번째 인자가 두번째보다 값이 크면 정상작동 X