const arr = [
    { id: 0, name: '혜림', age: 6 },
    { id: 1, name: '현일', age: 27 },
    { id: 2, name: '현아', age: 5 },
    { id: 3, name: '우림', age: 9 },
];

// 결과 값에서 false 가 반환되면 끝.
// 모두 true 가 아니면 false 반환 
const isAllHyunA = arr.every(element => element.name == '현아');
const youngerThanSevenAll = arr.every(element => element.age < 7);

console.log(isAllHyunA);
console.log(youngerThanSevenAll);