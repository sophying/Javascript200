

// reduce(() => callback function) : 단일 값으로 출력 
// reduce((앞값(결과값회전) , 뒤값) => { return 결과값})

const numArr = [1, 2, 3, 4, 5];
const result = numArr.reduce((acc, el) => {
    return acc + el
}, 0);

console.log(result);

/* 
  1)  acc + el = result    
  2)  result + el = result
  3)  result + el = result
  4)  return result ;
  초기화 값 = 0 ;

  1 + 2 = 3
  3 + 3 = 6
  6 + 4 = 10
  10 + 5 = 15

*/