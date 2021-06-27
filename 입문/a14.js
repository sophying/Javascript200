"use strict";

let store = { snack: 1000, flower: 5000, beverage: 2000 };

// key value = item
for (let item in store) {
  if (!store.hasOwnProperty(item)) continue;

  console.log(`${item} 은 가격이 ${store[item]} 입니다`);

  console.log(`item : ${item}`);

  console.log(store.hasOwnProperty(item));
}
