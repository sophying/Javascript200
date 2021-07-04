//async & await
// clear style of using promise :)

//1. async   - Promise 로 만들어줌
async function fetchUser() {
  //do network request in 10 secs/...
  return "sophy";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}
/* 
function getBanana(){
    return delay(3000)
    .then(()=> 'banana)
}
*/

// promise hell
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then(
      (banana) => `pickFruits   =>  ${apple} + ${banana}`
    );
  });
}

pickFruits().then(console.log);

//******** Promise Hell -> await*******
async function pickFruits2() {
  const apple = await getApple();
  const banana = await getBanana();
  return `pickFruits2   =>  ${apple} + ${banana}`;
}
pickFruits2().then(console.log);

// async 를 작성하지 않으면  Error 발생
// Uncaught SyntaxError:
// await is only valid in async functions and the top level bodies of modules

// ********* 병렬적으로 실행하기 1 *********
// 사과를 다운 받는데 바나나를 기다릴 필요 없고 각자 바로 시작가능
async function pickFruits3() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `pickFruits3   =>  ${apple} + ${banana}`;
}
pickFruits3().then(console.log);

// useful Promise APIs
// ********* 병렬적으로 실행하기 2 *********
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

// only One 가장 먼저 되는 값만 출력
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
