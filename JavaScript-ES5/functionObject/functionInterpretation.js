function music() {
  debugger; // 3. 멈춤 & 코드 실행
  var title = "Distance"; // 2-1. 변수 초기화
  function getMusic() { // 1. 함수 선언문 해석
    return title;
  };
  var listenMusic = function() { // 2-2. 변수 초기화
    getMusic();
  };
}
music();

/*
// 함수 코드 해석 순서 (3단계)

1. 함수 선언문 해석 (이름, 값)
(1) 마지막 줄에서 music() 함수 호출
(2) 함수 안에서 작성한 순서대로 함수 선언문을 찾음 (debugger는 실행 X)
(3) function getMusic() {} 의 function 오브젝트를 생성
(4) 함수 선언문이 더 존재하지 않으므로 debugger 앞으로 엔진 컨트롤이 이동

2. 변수 초기화
변수는 선언만하고 초기값으로 undefined만 할당함
var title = undefined;
var listenMusic = undefined;

3. 코드 실행 (실행할 때 변수에 값 할당)
(1) var title = "Distance";
    문자열 값 할당
(2) function getMusic() { return title };
    실행이 아닌 선언이므로 다음 줄로 이동
(3) var listenMusic = function() {};
    function 오브젝트를 생성해 listenMusic 변수에 할당
    -> listenMusic이 function 오브젝트가 된 것! 이제 listenMusic 함수를 호출 할 수 있음!
(4) getMusic() 함수 호출
    이와 같은 3단계로 getMusic() 함수의 함수와 변수를 초기화하고 코드를 실행
    엔진 컨트롤이 함수 코드로 이동(getMusic 함수 선언문으로 이동)
*/