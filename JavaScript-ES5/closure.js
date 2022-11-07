function music(musicParam) {
  var point = 100;
  function getPoint(pointParam) {
    point = point + musicParam + pointParam;
    return point;
  };
  return getPoint;
};
var obj = music(200);
console.log(obj(400));

/*
// 실행결과
700


// 값이 출력되는 과정
1.함수 선언문 music의 function 오브젝트 생성
  music오브젝트의 내부 property인 Scope에 글로벌 오브젝트 생성
2.var obj = music(200); 에서 music(200) 호출

실행 준비 단계
1.실행 컨텍스트 생성
2.렉시컬, 변수 환경, this 바인딩 컴포넌트 생성
3.function 오브젝트의 Scope를 외부 렉시컬 환경 참조에 바인딩

초기화 단계
1.호출한 함수의 파라미터 값을 호출된 함수의 파라미터 이름에 매핑, 선언적 환경 레코드에 설정
  (musicParam에 200 매핑)
2.getPoint function 오브젝트 생성 후 
  getPoint function 오브젝트의 Scope에 music 함수의 내부 영역이 설정됨
3.변수 이름: point, 값: undefined 할당 후 선언적 환경 레코드에 작성

코드 실행 단계
music 함수 안에 있는 코드 실행
1.point 변수에 값 100 할당
2.return getPoint; 에서 getPoint function 오브젝트 반환
3.var obj = music(200);
  return getPoint에서 반환한 getPoint function 오브젝트를 obj에 할당
4.console.log(obj(400)); 에서 obj를 호출하면 getPoint(400) 함수가 호출됨

getPoint의 클로저와 관련된 부분
1.실행 컨텍스트 생성
  getPoint 오브젝트의 내부 property인 Scope를 외부 렉시컬 환경 참조에 바인딩
  파라미터 이름에 값을 매핑하고 결과를 선언적 환경 레코드에 설정
  - 선언적 환경 레코드 { pointParam: 400 }
  - 외부 렉시컬 환경 참조 { musicParam: 200, point: 100 }
2.getPoint 함수 안에 함수 선언문, 변수 선언이 없으므로 코드 실행
3.point = point + musicParam + pointParam;
  point에 할당 = 100 + 200 + 400
4.콘솔에 700 출력
*/