

let obj = {};
/* obj.title = 'IDOL';

// freeze(객체) : 객체를 동결하는 것으로 한번 동결하면 속성 추가 및 제거 불가 
obj = Object.freeze(obj);
obj.title = 'Euphoria';

console.log(obj); */



const changeUntilNum = (obj, num) => {
    'use strict';

    while (true) {
        console.log(obj);
        // 26 >= 30
        if (obj.age >= num) {
            obj = Object.freeze(obj);
        }
        obj.age += 1;
    }
}

let profile = { name: '지연', age: 26 };
changeUntilNum(profile, 30);
