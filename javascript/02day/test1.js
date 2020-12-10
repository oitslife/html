console.log('hello world');

//한 줄 주석

/*
여러 줄 주석
*/

//변수선언
//es6 이전 버전에서는 이렇게 했다.
var name = '홍길동 ';

//하지만 이후에는 
let name2 = '홍길동그리';
let x = 10;
let y = 20;
console.log(x+y);

const z = 30;

//함수 선언문
//호이스팅 : 함수선언문은 위로 끌어올림. 실행문이 함수 밑으로 가도 실행이 됨.
function sum(a,b){
    let result;
    result = a+b;
    return result;
}
let result = sum(x,y);
console.log("ddd" + result);
console.log("=============================================");

//함수 표현식 호이스팅이 되지 않아서 실행식이 표현식 보다 나중에 나와야 한다.
let result2 = function(a,b){
    let result;
    result = a+b;
    return result;
}

console.log(result2(x,y));

//배열생성 2가지 방법
const array = [1,2,3,4,5];
const array2 = new Array(1,2,3,4,5);

console.log(array.toString());
console.log(array.length);
console.log(array2.toString());

//js에서 배열은 동적을 요소추가가 된다. 
array[5] = 6;
console.log(array.toString());
console.log(array.length);

array.length = 3;
console.log(array.length);
console.log(array.toString());

array.length = 10;
console.log(array.length);
console.log(array.toString());

array[7] = 8;
console.log(array.toString());

console.log("=============================================");

array3 = [];
array4 = new Array();
array3[0] = 1;
array3[1] = 2;
array3[2] = 3;
console.log(array3.toString());
array3[5] = 6;
console.log(array3.toString());
console.log(array3.length);

console.log("=============================================");
//const를 넣어도 
const array5 = [];
array5[0] = 1;
console.log(array5.toString());
array5.length = 6;
console.log(array5.toString());

//객체 생성
//1) 리터럴 표현식 - 일회성
const person = {
    name: '홍길동',
    age: 30,
    eat:function(){
        console.log('먹다');
    },
    smile:function(){
        console.log('웃다');
    }
};

console.log(person.name);
console.log(person.age);
person.eat();
person.smile();

person.bloodType = 'A';
console.log(person);

//2) new Object()로 객체 생성 new Object사용해서 person2라는 객체를 생성
const person2 = new Object();
person2
person2.name = '홍길순';
person2.age = 14;
person2.smile = function(){
    console.log('웃다');
}
person2.eat = function(){
    console.log('먹다');
}
console.log(person2);
person2.eat();
person2.smile();

console.log('===========================')

//3) {}빈 객체 생성
const person3 = {};
person3.name = '홍길동도리동동';
person3.age = 12;
person3.smile = function(){
        console.log('웃다');
}
person3.eat = function(){
    console.log('먹다');
}
console.log(person3);

//4) 생성자 함수 : 동일 타입의인스턴스를 여러 개 만들 때 사용한다.
function Person(name, age){
    this.name = name;
    this.age = age;
    this.smile = function(){console.log('웃다');};
    this.eat = function(){console.log('먹다');};
}
const person4 = new Person('홍길동',16);
const person5 = new Person('동그리',12);
const person6 = new Person('길복이',11);
console.log(person4);
console.log(person5);
console.log(person6);

console.log('=====================================')

//5) class : 생성자함수의 syntax sugar(설탕문법)
class Person2 {
    //생성자
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //메서드
    smile(){
        console.log('웃다');
    }
    eat(){
        console.log('먹다');
    }
}
const person8 = new Person2('홍길동ㅇㅇ',10);
const person9 = new Person2('대가리ㅇㅇ',30);
const person10 = new Person2('인어ㅇㅇ',20);

console.log(person8);
console.log(person8.smile());
console.log(person8.eat());
console.log(person9);
console.log(person10);

console.log('=============================');
let box = new Object();
box.color = 'red';
box.size = 10;
box.amount = 0;
box.fill = function(){this.amount += 2;}
box.consume = function(){this.amount -= 2;}

console.log(box);
box.fill();
console.log(box);


let student = {
    id : 1,
    name : 'kitty',
    grade : 4,
    smile : function(){console.log('dddd');}
}

console.log(student);
student.smile;


console.log(student.smile);

let student = {id:1, name:'kkkk',age:15}

let student = new Object();
student.id = 1;
student.name = 'kddd';
student.age = 22;
