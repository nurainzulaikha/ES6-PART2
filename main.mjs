import {student} from './student.mjs';

import readline from 'readline';

//  const readline = require('readline');

const r1 = readline.createInterface({

input: process.stdin,

output: process.stdout

});


r1.question('NAME = ', (name) => {
r1.question('MATRIC NO = ', (matricNo) => {
r1.question('MAJOR = ', (major) => {

r1.close();
info();

let stud1= new student();
stud1.name=name;
stud1.matricNo=matricNo;
stud1.major=major;

function info(){
   
    console.log(`The student name : ${name}`);
    console.log(`The student matric no : ${matricNo}`);
    console.log(`The student majoring in: ${major}`);
}

});
});
});