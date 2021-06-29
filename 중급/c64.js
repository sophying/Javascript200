'use strict';

function callRoll(students){
    if(!Array.isArray(students)) return;

    students.forEach((student) =>{
        console.log(`Are you here, ${student}`);
    });
}

const students = ['jun' ,'ali', 'murry', 'toby'];
callRoll(students);