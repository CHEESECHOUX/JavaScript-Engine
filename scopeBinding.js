function music() {
  var point = 100;
  function add(param) {
    point += param;
  };
  var get = function() {
    return point;
  };
  add(200);
  console.log(get());
};
music();

/*
// 바인딩
1.마지막 줄 music() 함수 호출
  초기화 단계에서 함수 이름, 변수 이름을 선언적 환경 레코드에 바인딩
  (값 할당이 아닌 바인딩임)

2.function add(param) 함수 선언문의 function 오브젝트 생성
  add 함수가 속한 스코프(영역)를 add 오브젝트 내부 property의 Scope에 설정
  add 이름을 선언적 환경 레코드에 바인딩

3.point, get 변수를 선언적 환경 레코드에 바인딩
  이때 값은 undefined

// 코드 실행
1.point 변수에 100 값 할당

2.get 함수 표현식의 function 오브젝트를 생성해 get 변수에 할당
  get 함수 표현식이 속한 스코프(영역)를 get 오브젝트 내부의 property의 Scope에 설정

3.add 함수 호출
  선언적 환경 레코드에서 point 이름을 찾았으나 없음
  add 오브젝트 내부 property의 Scope를 스코프로 사용

  point 변수는 add 함수 소속이 아니지만 (add 함수 밖에 있음)
  add 함수가 속한 스코프를 내부 property의 Scope에 설정해두고 함수에 소속된 것 처럼 사용할 수 있다.
  point 값 100을 사용해 값이 300으로 변경됨

4.get 함수 호출
  return point
  선언적 환경 레코드에서 point 이름을 찾았으나 역시 없음
  get 오브젝트 내부의 property의 Scope를 사용해 동일한 스코프에 point 변수가 있으므로 그 값을 사용

  add 함수가 호출 되었을 때 변경된 값 300 출력
*/