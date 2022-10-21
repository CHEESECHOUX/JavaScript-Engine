// this 바인딩 컴포넌트

var obj = { point: 100 }
obj.getPoint = function() {
	return this.point;
};
obj.getPoint();

/*
// 준비 단계
1.마지막 줄에서 obj.getPoint() 함수 호출
  (obj.getPoint의 값이 function 오브젝트인 것)
2.실행 컨텍스트 생성
  3개의 컴포넌트 생성 (렉시컬, 변수, this 바인딩)
3.this 바인딩 컴포넌트에
  getPoint() 에서 this로 obj의 프로퍼티를 (맨 마지막줄에 있는)사용할 수 있도록 바인딩 = 함수를 호출하는 시점에 묶어 놓는 것

// 초기화 단계
파라미터, 함수 선언문, 변수 선언 없음

// 실행 단계
1.return this.point 실행
2.this 바인딩 컴포넌트에서 point 검색
  getPoint() 함수를 호출한 오브젝트가 this 바인딩 컴포넌트에 참조된 상태
3.this 바인딩 컴포넌트에 point 프로퍼티가 있으므로 100을 반환


//
obj.getPoint() 에서 obj의 프로퍼티가 this 바인딩 컴포넌트에 바인딩 되도록 의도적으로 설계 해야함!
*/