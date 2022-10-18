// 엔진 처리
function music() {
  console.log(title);
  console.log(listenMusic);
  console.log(getMusic);
  debugger;
  var title = "Distance";
  function getMusic() {
    return title;
  };
  var listenMusic = function() {
    getMusic();
  };
}
music();

/*
music() 함수를 호출하면 debugger에서 실행이 멈춤

// 결과
undefined
undefined
[Function: getMusic]

//
title, listenMusic에 설정된 undefined도 값
값이 있는 것 = 엔진이 해석했다. = 스코프에 식별자해결을 위해 등록을 했다.

getMusic은 function 오브젝트를 만든 것

함수 선언문은 이름과 값 모두 등록
title, listenMusic은 이름만 등록

자바스크립트는 이름만 있을 경우 값을 undefined로 자동 설정함
(property로 키 밸류 형식으로 저장하기 위해)
*/