let user = {
  name: "sophy",
};
let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);

let user2 = {}; // 객체 선언 {}
Object.defineProperty(user2, "name", {
  //(첫번째인자: 속성정의 객체, 두번쨰인자 : "속성명", 세번째인자 :{인자의 속성 기술자})
  value: "sophy", // name 속성명의 value = "sophy"
  enumerable: true, // key 값을 회전하여 출력 가능
  configurable: true, // 속성기술자 변경 가능
  writable: false, // 값 변경 불가능
});
console.log(user2.name); // sophy
user2.name = "bbo";
console.log(user2.name); // sophy  => writable: false 이므로 값 변경 불가

let user3 = {
  toString() {
    return this.name;
  },
};
Object.defineProperty(user3, "toString", {
  enumerable: false,
});
for (let key in user3) {
  console.log(key);
  console.lof("---");
}

let user4 = {};
Object.defineProperty(user4, "name", {
  value: "sophy",
  configurable: false,
});
delete user4.name; // 불가  configurable: false 이므로
console.log(user4);
Object.defineProperty(user4, "name", {
  writable: true,
}); // 추가 불가능  configurable: false, 이므로
