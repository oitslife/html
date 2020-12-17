'use strict';

const $edu = document.getElementById('edu');
const $btn = document.getElementsByClassName("btn")[0];
console.log($edu);
console.log($btn);
$btn.addEventListener("click",function(){
console.log('버튼 클릭됨!!');
$edu.style.backgroundColor="yellow";
$edu.style.color = "write";
$edu.style.fontSize = "2em";
});

console.log($edu.parentElement);
console.log($edu.nextElementSibling);
console.log($edu.previousElementSibling);

console.log(document.getElementsByTagName)