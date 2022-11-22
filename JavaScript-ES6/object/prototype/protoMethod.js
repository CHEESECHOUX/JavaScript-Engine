// __proto__ 에 메서드 추가

"use strict"

function Book(param){
  this.point = param;
};

Book.prototype.getPoint = function(){
  return this.point;
};
const obj = new Book(100);

// __proto__ 에 메서드 추가
obj.__proto__.setPoint = function(param){
  this.point = param;
};

/*
__proto__ 에 function을 추가하면 prototype 에도 설정됨.
= __proto__에 메서드를 추가하면 __proto__ 에 추가하지 않고 prototype 에 추가하기 때문
= 메서드로 추가하는 것과 같음

prototype에 추가 된다는 것은,
이미 만들어져있는 인스턴스, 앞으로 만들어질 인스턴스에서 메서드를 사용할 수 있다는 뜻!
-> prototype sharing
*/