"use strict";

for (let i = 0; i < 10; i++) {
  console.log(`${i} 번째 반복 `);
}

let hometown = [
  { name: "tom", place: "일산", city: "고양" },
  { name: "mina", place: "과천" },
  { name: "tomy", place: "부산", city: "경상도" },
  { name: "hello", place: "광주", city: "전라도" },
  {},
  {},
];

for (let j = 0; j < hometown.length; j++) {
  console.log(j);
  let ht = hometown[j];
  if (!ht || !ht.city) {
    console.log(`${j} : 값 없음`);
    continue;
  }

  console.log(`'''${j} 번째 실행`);

  if (ht.name === "tomy") {
    console.log(`${ht.name} 의 고향은 ${ht.city} ${ht.place} 입니다`);
  }
}
