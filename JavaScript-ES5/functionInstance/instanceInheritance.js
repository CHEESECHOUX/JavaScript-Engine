// ES5 의 인스턴스 상속
function Music(title) { // Music 생성자 함수 // 3-1. 여기는 Point 함수와 연결되어있지 않음
  this.title = title;
};
Music.prototype.getTitle = function() { // 3-1. Point 함수와 연결 되어 있음(2번에서)
  return this.title;
};
function Point(title) { // Point 생성자 함수
  Music.call(this, title); // 3-2
};
Point.prototype = // 2
      Object.create(Music.prototype, {}); // 1
var obj = new Point("자바스크립트"); // 3
console.log(obj.getTitle());

/*
실행 결과
자바스크립트

1.Object.create 함수를 호출해
2.Music.prototype.getTitle을 Point.prototype에 할당
3.new 연산자로 Point 생성자 함수 호출
  3-1.첫째 줄이 Point 함수와 연결되어있지 않음
  3-2.파라미터 값을 넘겨줘서 this로 참조해 인스턴스에 현재 만든 인스턴스에 할당하도록 함 

ES5 상속은 객체 지향 프로그래밍의 상속 기능이 부족해 ES6에서 추가됨 (Class)
*/