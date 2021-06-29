const arr = [
    {id:0, name:'혜림', age: 6},
    {id:1, name:'현일', age: 27},
    {id:2, name:'현아', age: 5},
    {id:3, name:'우림', age: 9},
];

// true 가 반환될때까지 회전, 만일 끝까지 안나오면 false 반환 
// true 가 반환되면 true 다음부터는 회전 X 바로 끝.
const isHyunAhere = arr.some(element => element.name =='현아');
const olderThanSix = arr.some(element => element.age > 6);
console.log(isHyunAhere);
console.log(olderThanSix);