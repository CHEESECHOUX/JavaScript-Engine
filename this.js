var book = {
  value: 123,
  get: function() {
    var value = 456;
    console.log(this === window);
    console.log(this.value);
  }
};
var fn = book.get;
fn();

/*
실행 결과
true
undefined

//
1.fn()함수 호출
  fn()함수는 글로벌 함수로 글로벌 오브젝트는 오브젝트 이름이 없으므로 함수 이름만 작성해 호출
  이때 this는 글로벌 오브젝트를 참조함
  
  window는 글로벌 오브젝트를 참조함

2.console.log(this === window)
  true 출력

3.console.log(this.value)
  this는 글로벌 오브젝트를 참조하는데 글로벌 오브젝트에는 value라는 프로퍼티가 없음
  undefined 출력
*/

function getTitle() {
  console.log("crush");
};
var music = function() {
  function getTitle() {
    console.log("emily king");
  };
  this.getTitle();
  getTitle();
};
music();

/*
실행 결과
crush
emily king

//
1.music() 함수 호출
  music() 함수는 글로벌 함수. 글로벌 오브젝트는 오브젝트 이름이 없으므로 함수 이름만 작성해 호출.
  이때 music 함수 내부의 this는 글로벌 오브젝트를 참조함

2.this.getTitle()을 호출하면
  첫 번째 줄 function getTitle()로 가서 
  crush 출력

3.다시 music() 함수로 돌아가 getTitle() 호출
  getTitle() 함수는 music() 함수의 선언적 환경 레코드에서 getTitle을 찾아 실행
*/