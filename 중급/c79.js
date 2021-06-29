
/* 
Array.from(배열로 변환될 값, 반환될 배열 내부 요소에 대한 callback 함수)
*/


const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr); // 문자열을 하나씩 쪼개서 배열로 담기

const modifiedArr = Array.from(distributedArr, el => el *2);
console.log(modifiedArr);