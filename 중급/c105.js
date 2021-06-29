
const album = {
    name:'LOVE YOURSELF'
};

album.song = 'Euphoria';
album.singer = 'RM';

console.log(album);

/* 
seal() : 객체 속성을 추가 및 삭제 할 수 없음
*/
Object.seal(album);

album.comment = 'Answer';  // 추가 불가 
album.singer = 'JK';
delete album.name;  // 삭제 불가

console.log(album);