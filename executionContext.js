// 실행 컨텍스트 형태

function music() {
  const point = 123;
  function show() {
    const title = "crush";
    // getPoint();
    // this.musicAmount
  };
  function getPoint() {
    return point;
  };
  show();
}
music();


// show() 함수가 호출되면 실행 컨텍스트 생성
/*
함수에서 값을 구하는 형태
1. parameter  // show
2. 변수 선언  // title
3. 함수를 호출  // getPoint
4. 함수 밖에 있는 변수 // point
5. this로 참조해 property 값 구하기 // this.musicAmount
*/

/*
show 실행 컨텍스트: {
  렉시컬 환경 컴포넌트: {
    환경 레코드: {
      선언적 환경 레코드: {
        title: "crush" // property 형태로 설정
      },
      오브젝트 환경 레코드: {}
    },
    외부 렉시컬 환경 참조: { // show의 스코프(show가 속한 범위)를 설정
      point: 123,
      getPoint: function() {}
    }
  },
  변수 환경 컴포넌트: {},
  this 바인딩 컴포넌트(TBC): {
    글로벌 오브젝트(window)
  }
}
*/


// 실행 컨텍스트 안에 함수에서 구할 수 있는 값의 덩어리를 만들어 놓는 것!
// 자바스크립트 정적 컨텍스트