"use strict";

let cart = [
  { name: "옷", price: 2000 },
  { name: "가방", price: 3000 },
];

let numofItems = `카트 ${cart.length} 개의 아이템이 있음`;
let cartTable = `<ul>
    <li>품목 : ${cart[0].name}, 가격 :  ${cart[0].price}</li>
    <li>품목 : ${cart[1].name}, 가격 :  ${cart[1].price}</li>
</ul>`;

console.log(numofItems);
console.log(cartTable);
let personName = "harin";

let helloString = "hello " + personName;
let helloTemplateString = `hello ${personName}`;

console.log(helloString == helloTemplateString);
console.log(helloString === helloTemplateString);

console.log(typeof helloString);
console.log(typeof helloTemplateString);
