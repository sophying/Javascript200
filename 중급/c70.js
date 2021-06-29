'use strict';
const sentence = 'Wakanda Forever!!!';

console.log(sentence.substr(8)); //Forever!!!
console.log(sentence.substr(8, 7)); //Forever   : 8번째 index 로부터 7자리
console.log(sentence.substr(0));  //Wakanda Forever!!!
console.log(sentence.substr(-10));  // Forever!!!  뒤에서부터 10번째 index 의 값으로부터 뒤로 모두 해당
console.log(sentence.substr(0, -3)); //  두번째에 음수가 들어가면 정상작동 X
console.log(sentence.substr(30)); // 문자열보다 큰 index 가 들어가면 차지 못함 정상작동 X
console.log(sentence.substr(0, 30));  //Wakanda Forever!!

