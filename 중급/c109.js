
const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min); // floor()  로 정수 변환 함.
};

for(let i = 0; i < 5 ; i++){
    console.log(generateRandom(1, 10));
}

console.log(' ----- ');

for(let i = 0 ; i < 5; i++){
    console.log(generateRandom(10, 100));
}