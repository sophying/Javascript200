const products = [{ name: "가방" }, { name: "노트북" }];

for (const item of products) {
  console.log(item);
}

const iterator = products[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
