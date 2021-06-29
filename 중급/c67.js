
'use strict';

const sentences = ['  ABC abc', 'ABC abc   ', `first   
second third
        forth
sentence

`];

const filterSentence = (sentences) =>{
    const filtered =[];
    sentences.forEach(s => {
        filtered.push(s.trim()); // 공백, 탭, 줄바꿈 삭제 
    })
    return filtered;
}

console.log(filterSentence(sentences));
