'use strict';
//도서 5권의 제목, 저서, 가격
const bookArray = new Array(5);

//book객ㅊㅔ 정의 - 생성자 함수로 생성.
function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
}

//도서 가격이 가장 비싼 도서 도서 반환.
function max(arrays){
    let maxbook = arrays[0];
    for(let i=1; i<arrays.length; i++){
        if(maxbook.price < arrays[i].price){
            maxbook = arrays[i];
        }
    }
    return maxbook;
}

for(let i=0; i<bookArray.length; i++){
    let bookStr = prompt('도서 정보를 입력하세요(제목, 저서, 가격)', "제목, 저서, 가격");
    let tokens = bookStr.split(',');
    //bookArray[i] = new Book(tokens[0],tokens[1],tokens[2]);
    const book = new Object(); //const book =
    book.title = tokens[0];
    book.author = tokens[1];
    book.price = tokens[2];
    bookArray[i] = book;
}
console.log(max(bookArray));