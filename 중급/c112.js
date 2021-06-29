const positiveNum = 9903.54;
const negativeNum = -39.27;

// foolr() 소수점 밑의 값 내림 
console.log(Math.floor(positiveNum));  // 93 
console.log(Math.floor(negativeNum));  //  -40
console.log(Math.floor(positiveNum * 10) / 10);  //   (floor(935.4) = 935) / 10 = 93.5
console.log(Math.floor(positiveNum / 10) * 10);  // 
console.log(Math.floor(negativeNum * 10) / 10);  //   (floor(-392.7) = -393) / 10 = -39.3
console.log(Math.floor(negativeNum / 10) * 10);  // -40

