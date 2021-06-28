const str1 = "javascript 200"; // String
const str2 = new String("javascript 200"); //Object

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 === "javascript 200"); //true
console.log(str2 === new String("javascript 200")); // false   주소값을 참조하므로 같지 않음

console.log(str1.valueOf());
console.log(str2.valueOf());
