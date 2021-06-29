const val = 573.926;

/* 
round() 소수점 반올림 
*/
console.log(Math.round(val)); // 소수점 바로 뒤에서 반올림  
console.log(Math.round(val * 10) / 10); // 소수점 첫째
console.log(Math.round(val * 100) / 100);  // 소수점 둘째
console.log(Math.round(val / 10) * 10);  // 1의 자리에서 반올림
console.log(Math.round(val / 100) * 100); // 2의 자리에서 반올림