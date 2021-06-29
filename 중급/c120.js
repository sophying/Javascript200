const numRegExp = /[0-9]+/; // 하나이상 일치하는  모든 문자열 확인  0-9까지 일치하는 수가 하나라도 있는가?
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/; // {자릿수}
const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;  // -_. 허용 

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));
console.log(phoneRegExp.test('010-1234-3662'));
console.log(phoneRegExp.test('02-8844-1234'));
console.log(emailRegExp.test('test123@javascript.org'));
console.log(emailRegExp.test('test-javascript'));
