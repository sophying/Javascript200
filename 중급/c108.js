const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2); // bin 이 2진수라는 의미미고 parseInt 를 통해 10진수로 만듦
const dexByOct = parseInt(oct, 8); // oct 가 8진수임을 의미하고 parseInt 를 통해 10진수로 만듦
const dexByhex = parseInt(hex, 16); // hex 가 16진수임을 의미하고 parseInt 를 통해 10지수로 만듦
const hexByOct = parseInt(oct, 8).toString(16); // 8진수를 10진수로 변환후 다시 toString() 으로 16진수화 함

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByhex);
console.log(hexByOct);
