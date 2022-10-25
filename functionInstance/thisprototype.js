// this와 prototype
// 인스턴스 생성
function Music() { // 2
  console.log("1:", this.point); // 3
};
Music.prototype.getPoint = function() {
  this.setPoint(); // 4-1. this 메서드가 obj 인스턴스를 참조 & 5
  console.log("2:", this.point); // 7
};
Music.prototype.setPoint = function() {
  this.point = 100; // 6
};
var obj = new Music(); // 1
obj.getPoint(); // 4 인스턴스.getPoint 메서드 호출

/*
실행 결과
1:undefined
2:100


1.new 연산자로 Music 생성자 함수 호출
2.인스턴스를 만들고 생성자 함수로 이동
3.생성자 함수에서 this는 생성하는 인스턴트를 참조한다
  생성하는 인스턴스에 point 프로퍼티가 없다 -> 프로퍼티는 값이 없으면 에러가 아닌 undefined 반환
4.this가 메서드를 호출한 인스턴스를 참조
5.this가 obj 인스턴스를 참조해 같은 인스턴스에 있는 setPoint()를 호출 할 수 있게됨
  (인스턴스 안에서는 prototype에 연결되어 있는 것들은 모두 프로퍼티 개념임
  위의 코드와 같이 this로 호출 할 수 있음!)
6.같은 인스턴스에 있는 point 프로퍼티에 100을 할당
7.this는 obj 인스턴스를 참조하게됨
  point 프로퍼티에 할당된 값을 공유할 수 있으므로 100 출력
*/



// prototype 메소드 직접 호출
// Book.prototype.getPoint(); 인스턴스를 생성하지 않고 직접 메소드 호출
function Book(point) { // 2 / 3-2
  this.point = point; // 3-3
};
Book.prototype.getPoint = function() { // 4-2
  return this.point; // 3-1 / 3-4 / 4-1
};
var obj = new Book(100); // 1
console.log(obj.getPoint()); // 3

console.log(Book.prototype.getPoint()); // 4

/*
실행 결과
100
undefined


1.new 연산자로 Book 생성자 함수 호출
2.인스턴스 만들고 생성자 함수로 이동
3.인스턴스의 getPoint 호출
  3-1.this가 obj 참조
  3-2.point에 100 할당
  3-3.인스턴스의 point 프로퍼티에 100 할당
  3-4.100 출력
4.인스턴스를 생성하지 않고 직접 메소드 호출
  4-1.this가 prototype을 참조 (인스턴스가 아닌)
  4-2.prototype에 point 값이 없음. undefined 반환


prototype과 인스턴스는 오브젝트가 다고 저장하는 위치가 다름
*/