'use strict';


//1) 이벤트 소스 찾기
const $buttons = document.querySelectorAll("button");
console.log($buttons);
//2) 찾은 이벤트 소스에 이벤트 리스너 부착
Array.from($buttons).forEach(function(ele){
    ele.addEventListener("click",function(evt){
        //3) 이벤트 핸들러 내에서 처리 로직 반영
        console.log(evt);
        if(evt.target.nextElementSibiling != null)return;

        const $question = evt.target.getAttribute('id');
        //3-1) 부모요소를 찾기
        const $parentOfButton = evt.target.$parentElement;
        //3-2) 답안으로 추가할 요소를 생성
        const $p = document.createElement("p");
        //3-3) 생성된 요소의 컨텐츠를 답안 넣기.
        switch($question){
            case 'q1':
                $p.textContent = '백설공주';
                break;
            case 'q2':
                $p.textContent = '백살공주';
                break;
        }
        //3-4) 생성된 요소를 부모요소의 자식요소로 추가하기.
        $parentOfButton.appendChild($p);
    })
});

function addAnser(obj,text){
    document.getElementsByTagName('button');
    
}