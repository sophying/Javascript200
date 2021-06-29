
// Array.splice(start idx, remove idx, add element, , , ,)
const fruits = ['melon', 'lemon','source','apple','juice'];
console.log(fruits);

fruits.splice(4,1);
console.log(fruits);

fruits.splice(4,0,'grape');
console.log(fruits);

fruits.splice(2,1,'mandarin','strawberry','watermelon');
console.log(fruits);