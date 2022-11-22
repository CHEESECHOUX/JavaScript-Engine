// prototype과 __proto__ 메서드 호출 방법


// 1. prototype 에 연결된 메서드 호출

function Book(){
  this.point = 100;
};
Book.prototype.getPoint = function(){
  console.log(Object.is(this, Book.prototype)); // 1
  return this.point;
};
console.log(Book.prototype.getPoint()); 
console.log(Book.prototype.getPoint.call());
/*
실행 결과
true
undefined
false
undefined

1
getPoint 메서드 안에서 this가 Book.prototype을 참조
(호출하는 메서드 앞에 작성한 오브젝트를 참조하기 때문에)

return this.point에서 this가 Book.prototype을 참조하니까
point 프로퍼티는 undefined

2
call 메서드에서 첫번째 파라미터로 작성한 오브젝트(Book)를
호출된 메서드에서 this로 참조


this.point를 참조하려면 인스턴스를 생성하고 인스턴스의 메서드를 호출해야함!
(new 연산자로 Book을 호출해야지 this.point = 100; 을 실행함)
*/




// 2. __proto__에 연결된 메서드 호출
// new 연산자로 인스턴스를 생성해 인스턴스의 메서드를 호출
{
  "use strict"

  function Book(){
    this.point = 100;
  };
  Book.prototype.getPoint = function(){
    return this.point;
  };
  const obj = new Book();

  console.log(obj.getPoint());
}