"use strict";
//Javascript is synchronous  - 순서대로 진행됨
//Execute the code block by order after hoisting.
//hoisting : var, function declaration 선인 가장 위로 올라가는 것
//hoisting 이후부터 순서대로 이루어짐

console.log(1);
console.log(2);
console.log(3);

/* 
1
2
3
순서대로출력됨 
*/

console.clear();
// async 비동기는 언제 코드가 실행될지 예측할 수 없음
console.log(1);
setTimeout(() => {
  // 브라우저에 미리 1초후에 실행하라고 요청함
  console.log(2);
}, 1000); // 나중에 다시 불러줘 : callback function
console.log(3);

// 즉각 Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => {
  console.log("hello");
});
// 나중에 언제 실행될지 모름 Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

console.clear();
console.log("Callback Hell");

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "sophy" && password === "1234") ||
        (id === "coder" && password === "1111")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "sophy") {
        onSuccess({ name: "sophy", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt(" enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role `
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
