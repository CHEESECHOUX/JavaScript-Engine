// 화살표 함수와 this

// 1. 화살표 함수 안에서는 this 값이 글로벌 오브젝트를 참조함
// 일반 함수와 화살표 함수 비교

// 일반 함수
"use strict"
function book() {
  function getPoint() {
    console.log(this);
  };
  getPoint();
  // window.getPoint();
};
window.book();
/*
실행결과
undefined

strict 모드에서는 window.book() 처럼 호출하는 함수 앞에 오브젝트를 작성해야함.

1.window.getPoint()로 작성하지 않으면
  getPoint() 안에서 this 값이 undefined로 출력됨
2.undefined가 아닌 값을 출력하기 위해 window.getPoint()로 호출하면 
  window 오브젝트에 getPoint() 가 없어 에러
3.strict 모드의 함수에서 this를 참조하기 위해서는
  this를 별도로 저장한 후에(var로 선언하는 등) 사용해야하는데 번거롭다.
*/

// 화살표 함수
"use strict"
var point = 100;
function sports() {
  const getPoint = () => {
    console.log(this.point);
  };
  getPoint();
};
window.sports();
/*
실행결과
100

1.화살표 함수로 작성하면 getPoint() 호출 가능 (window.getPoint() 로 작성하지 않아도 됨)
2.getPoint()가 화살표 함수 안에서 this 값을 undefined가 아닌 글로벌 오브젝트를 참조함
3.var point = 100을 작성했기 때문에
  100 출력
*/




// 2. 화살표 함수는 함수에 this를 갖고있지 않음
// 일반 함수
const music = {
  point: 500,
  getPoint: function() {
    console.log(this.point);
  }
};
music.getPoint();
// 실행결과
// 500

// 화살표 함수
var point = 100;
const movies = {
  getPoint: () => {
    console.log("this.point", this.point);
  }
};
movies.getPoint();
/*
실행 결과
this.point 100

1.화살표 함수는 함수에 this를 갖고 있지 않음
  = this가 없다
  = 대부분(100%는 아니라) 화살표 함수의 this는 window 오브젝트를 참조함
2.화살표 함수의 this는 글로벌 오브젝트에 속하기 때문에 point 변수의 값을 가져올 수 있음
*/




/*
화살표 함수의 this가 window 오브젝트를 참조하는 과정

화살표 함수에서는 정적 스코프의 this를 사용함
(정적 스코프 = 엔진이 해석할 때 함수를 만나면 function 오브젝트를 생성한 후 함수가 속한 스코프를 생성한 오브젝트에 바인딩)
*/

var title = "책";
const book = {
  show: () => console.log(this.title)
};
book.show();
/*
실행 결과
책

1.book 오브젝트에 설정된 스코프의 this를 화살표 함수에서 this로 사용함
  (= 화살표 함수에는 this가 없으니 오브젝트에 바인딩된 스코프의 this를 사용)
2.book 오브젝트가 글로벌 오브젝트에 설정 되니까 this가 window 오브젝트를 참조하게 되는 것
*/