'use strict';

const sentence = 'This will be the end of Wakanda';

console.log(sentence.substring(13)); //the end of Wakanda
console.log(sentence.substring(13, 20)); // the end 
console.log(sentence.substring(0));   //This will be the end of Wakanda
console.log(sentence.substring(0, -20));  // - 음수값이 들어가면 정상작동 X
console.log(sentence.substring(50));   // 인덱스 길이를 뛰어넘어 정상작동 X
console.log(sentence.substring(20, 13));// the end   : 첫번째 인자가 두번째 보다 클 경우 교환하여 수행함
