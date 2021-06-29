console.log('2021-06-29 04-23-14'.replace('-', ':')); // -와 일치하는 것 첫번째를 찾아 변경
console.log('2021-06-29 04-23-14'.replace(/-/g, ':')); // - 와 일치하는 것 모두(g :global) 찾아 변경
console.log('2021-06-29 04-23-14'.replace(/\d/g, '9')); //  /d(숫자형) 를 찾아 모두(g :global) 9 로 변경


const littleWomen = 'Meg March, Jo March, Beth March, Amy March';
console.log(littleWomen.replace(/\w+ March/ig, 'Mrs.$&')); // + March  우측에 March 를 두는 모든 단어를 찾아 Mrs. 을 붙여라
console.log(littleWomen.replace(/\w+ March/ig, (str, d1, d2, d3, d4, offset, s) => {
    let tag = '';

    if(/Meg/.test(str)) tag = '첫째';
    else if(/Jo/.test(str)) tag ='둘재';
    else if(/Beth/.test(str)) tag ='셋째';
    else if(/Amy/.test(str)) tag ='넷째';
    
    console.log(`원작 "작은 아씨들"에서 주인공 ${str} 은 ${tag} 입니다.`);
    return tag;

}));

const name = 'March Amy';
console.log(name.replace(/(March) (Amy)/, '$2 $1' ));
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
    console.log(`${second} is name, ${first} is first name.`);
    return `${second} ${first}`;
}));
