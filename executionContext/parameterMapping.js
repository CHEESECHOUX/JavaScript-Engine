var obj = {};
obj.getTotal = function(one, two, two) {
	console.log(one + two);
}
obj.getTotal(11, 22, 55);

/*
초기화 단계
1.obj.getTotal (11, 22, 55) 함수가 호출되면 실행 컨텍스트가 생성되고 실행 컨텍스트 안으로 이동
  함수를 호출한 오브젝트, 함수 코드, 호출한 파라미터 값을 실행 컨텍스트로 넘겨줌
2.getTotal function 오브젝트의 FormalParameters에서 배열 형태인 파라미터 이름을 찾아 하나씩 읽음 [”one”, “two”, “two”]
3.실행 컨텍스트로 넘겨준 파라미터 값에서 index 번째의 값을 구함
4.배열 안에 있는 파라미터의 이름(호출된 함수의 파라미터 이름)과 3번에서 구한 값을 파라미터 작성 순서에 따라 선언적 환경 레코드에 { one: 11, two: 22 } 형태로 매핑
5.호출된 함수의 파라미터 이름이 같으면 값이 대체 되므로 { one: 11, two: 55 } 로 변경

함수 코드 실행 단계
선언적 환경 레코드에 { one: 11, two: 55 } 로 되어 있음
1.console.log(one + two)
  선언적 환경 레코드에서 one과 two의 값을 구해 66 출력
*/