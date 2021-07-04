// promise is a Javascript object for asynchronous operation.
// state : pending -> fulfilled or rejected
// Producer vs Consumer(data 소비)

//1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files)
  console.log("doing Something ...");

  setTimeout(() => {
    // resolve("sophy");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers : then, catch , finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//Uncaught (in promise) Error: no network 잡히지 않은 에러

// 3. Promise chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => Egg`), 1000);
    setTimeout(() => reject(new Error(`Error !! ${hen} => Egg`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 달걀후라이`), 1000);
  });
/* 
getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));
 */
// = 동일
getHen() //
  .then(getEgg)
  .catch((error) => {
    return "빵";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
