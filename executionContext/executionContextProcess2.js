function music() {
  function get() {
    return point;
  };
  var point = 123;
  return get();
};
console.log(music());

// 실행 결과 
// 123

/*
1.함수 선언문 get function 오브젝트 생성
  get 오브젝트의 내부 property인 Scope에 글로벌 오브젝트 생성
2.맨 마지막 줄 music() 함수를 호출하면 엔진이 실행 컨텍스트 생성하고 실행 컨텍스트 안으로 이동

music 함수의 실행 컨텍스트
// 준비 단계(실행 컨텍스트를 실행할 수 있는 환경 구축)
1.컴포넌트를 생성해 실행 컨텍스트(렉시컬, 환경, this 바인딩 컴포넌트 생성)에 첨부
2.환경 레코드, 외부 렉시컬 환경 참조 를 생성 후 렉시컬 환경 컴포넌트에 첨부
  외부 렉시컬 환경 참조에 music이라는 function 오브젝트의 Scope를 참조

// 초기화 단계
1.호출한 함수의 파라미터 값이 없으므로 패스
2.get이라는 function 오브젝트를 만들고 Scope에 music 오브젝트 설정
3.point 변수에 undefined 값 할당
  환경 레코드에 작성

// 코드 실행 단계
1.music 함수 안에 있는 코드 실행
2.point 변수에 123 값 할당
3.get() 함수를 호출하면 엔진은 실행 컨텍스트를 생성하고 샐행 컨텍스트 안으로 이동

  get 함수의 실행 컨텍스트
  // 준비 단계
  1.컴포넌트를 생성해 실행 컨텍스트(렉시컬, 환경, this 바인딩 컴포넌트 생성)에 첨부
  2.환경 레코드, 외부 렉시컬 환경 참조 를 생성 후 렉시컬 환경 컴포넌트에 첨부
    외부 렉시컬 환경 참조에 get이라는 function 오브젝트의 Scope를 참조
  
  // 초기화 단계
  파라미터, function 키워드, 변수가 없음

  // 실행 단계
  1.return 문의 point 변수 식별자를 외부 렉시컬 환경 참조에서 찾음
  2.point 값 123을 찾음
  3.music 함수의 return 값이 get 함수의 return 값이므로 point의 값 123을 콘솔에 출력
*/