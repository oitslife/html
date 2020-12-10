//2번 문제
//스크립트 입격 모드
// 'use strict';

// const array = new Array(5);
// let i = 0;
// while (i < array.length) {
//     let tmp = prompt('숫자 입력','');
//     if (!isNaN(parseInt(tmp))) {
//         array[i++] = tmp;
//     }
//     else {
//         alert('정수를 입력하세요');
//     }

// }
// console.log(array);
// console.log(array.reverse());


//8번 문제

const array = new Array(16);
const array1 = new Array(3);
let a;
let b;

const arr = [
    [1],
    [1],
    [1]
];
// arr=3;
// arr[0]=1;
// arr[1]=2;
// arr[2]=3;

console.log(arr.length);
console.log(arr[0].length);
console.log(arr[1].length);
console.log(arr[2].length);

for(i=0; i<array.length; i++){
    for(j=0; j<array1.length; j++){
                
        a = Math.random()*300+1;
        b = Math.floor(a);
        array1[i][j]=b;
    }
    array[i] = array1;
}

for(i=0; i<array.length; i++){
    console.log(array[i]);
}

let person = {
    name: 'gh',
    eat:function(){
        console.log('eat');
    }
};

let person2 = new Object();
person2.name = 'gh';
person2.eat = function(){
    console.log('eat');
}

let person3 = {};
person3.name = 'gh';
person3.eat = function(){
    console.log('eat');
}

function Person4(name,age){
    this.name = name;
    this.age = age;
    this.eat = function(){
        console.log('eat');
    };
}

class Person5{
    //생성자
    constructor(name,age){
    
        this.name = name;
        this.age = age;
    }
    //메서드
    eat(){
        console.log('eat');
    }
}

