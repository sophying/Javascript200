
/* 
assign<T, U>(target: T, source: U): T & U;   병합하는 것.
*/

const obj1 = { one: 1, two: 2, three: 3 };
const obj2 = { name: '탄이', age: 5, address: 'Seoul' };
const obj3 = { friends: ['혜림', '현아', '현일', '우림'] };

const newObj1 = Object.assign({}, obj1);
console.log(newObj1);  
const newObj2 = Object.assign({}, obj1, obj2); // assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
newObj1.four = 4;

console.log(obj1);
console.log(newObj1);
console.log(newObj2);
 
console.log('\n');

const newObj3 = Object.assign(obj1, obj3); //  assign(target: object, ...sources: any[]): any;

console.log(obj1);
console.log(newObj1);
console.log(newObj2);
console.log(newObj3);