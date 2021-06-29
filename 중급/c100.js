
const arr = [1, [2, 3], [4, 5, 6], ['배열', '나열하기'], 'Javascript'];
const result = arr.reduce((acc, el) => {
    return acc.concat(el);
},[]);

console.log(result);

/* 
[] 배열로 초기화 되었으므로, 
concat 되는 값들은 배열 안에  순서대로 담김 
return [] 배열로 반환됨 
*/