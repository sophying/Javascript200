console.log('배열.slice(시작 인덱스, 끝 인덱스)');


const arr = ['melon', 'lemon', 'source', 'apple', 'juice' ];
console.log(`과일이 아닌 요소는 ${arr.slice(2,3)} 와 ${arr.slice(4,5)} 입니다.`);

console.log(arr.slice(0,10)); // 배열의 길이보다 큰 값이 들어가면 배열의 마지막 값까지 출력함