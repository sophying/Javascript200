const str = 'To lose your path iis the way to find that path';

const regex1 = /path/;
const regex2 = /q/;
const regex3 = /t/g; // 모든 소문자(g) 인 t 를 찾아라
const regex4 = /t/ig;  // 대소문자 구분 없이(ig) t 를 찾아라

console.log(str.search(regex1));
console.log(str.search(regex2));
console.log(str.search(regex3));
console.log(str.search(regex4));