/* 인스턴스에 함수로 추가

new 연산자로 인스턴스를 생성하고 인스턴스의 프로퍼티로 함수를 추가.
다른 인스턴스와 공유하지 않기위해

(new 연산자로 인스턴스를 생성하면 prototype에 연결 되어있는 메서드들을 모든 인스턴스에서 공유하게 됨.)
*/

function Book(){
  this.point = 100;
};
Book.prototype.getPoint = function(){
  return this.point;
};
const obj = new Book();

obj.setPoint = function(param){ // 인스턴스의 프로퍼티로 setPoint 함수를 설정
  this.point = param;
};

obj.setPoint(200);

console.log(obj.getPoint());


const newObj = new Book();
console.log(newObj.setPoint);
/*
인스턴스의 프로퍼티로 setPoint()를 설정 했기 때문에,
새로운 인스턴스를 생성하면 setPoint()를 인스턴스에서 사용할 수 없다.

setPoint가 공유되지 않아 undefined
*/