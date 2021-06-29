/* 
arr.indexOf(search value, start index);  =>   index 반환
*/

const arr = ['spring', 'summer', 'fall', 'winter', 'is', 'down'];

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter', 4)}`);
// index 4에서 winter 을 찾을 수 없으므로 -> -1 