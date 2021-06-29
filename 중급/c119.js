const str = 'To lose your path iis the way to find that path';

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi; // 대소문 구분 없이 to TO To tO 찾기 
const findRangeRegex = /([a-f])\w+/i; // a - f사이의 글자 중 해당 문자로 시작해서 whitespace 가 나타날때까지의 단어를 첫번째 글자만 찾아 반환
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));



/* 
\w   : 모든 단어 
\W   : 단어 문자가 아닌 문자와의 불일치 여부 
\d   : 임의의 숫자 0 - 9 까지 일치 여부 
\D   : 숫자가 아닌 모든 문자 확인 
\s   : 공백 문자(공백, 탭, 줄 바꿈)와 일치여부 
\S   : 공백문자가 아닌 문자 확인  

*/

