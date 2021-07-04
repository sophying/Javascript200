const items = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
const seq = {
  [Symbol.iterator]() {
    // The Iterable Protocol 반복 가능한 규약
    let i = 0;
    return {
      next() {
        // iterator 객체
        const value = items[i];
        i++;
        const done = i > items.length; // i 가 items.length 보다 큰값이면  true /  작은 값이면 false
        return { value, done }; // { value : current value , true }
      },
    };
  },
};

for (let s of seq) console.log(s);
const [a, b, c, ...arr] = seq;
console.log("a >>> ", a);
console.log("b >>> ", b);
console.log("c >>> ", c);
console.log("arr >>> ", arr);
