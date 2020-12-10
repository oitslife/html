'use strict';

function change(){
    let p =document.getElementById("mySpan");
    p.style.color="red";
    p.style.border="2px dotted violet";
}
function change2(){
    let a = document.getElementsByTagName("p");
    let sum = a.length;
    alert("p 태그의 갯수는"+sum);
}