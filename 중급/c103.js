const obj ={
    movie:'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

// Object.entries(객체)  : key와 value 가 배열로 출력됨  
const modifiedObj = Object.entries(obj);
console.log(modifiedObj);

/* 
0: (2) ["movie", "Sunny"]
1: (2) ["music", "Like Sugar"]
2: (2) ["style", "Retro"]
3: (2) ["price", Infinity]
*/