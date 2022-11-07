// js 파일 여러개 사용시

var globalVar = "var 변수";
let globalLet = "let 변수";
{
  let globalBlock = "block 변수";
};

/*
var 변수는 글로벌(window) 오브젝트에 설정됨
let 변수는 Script에 설정됨
let 의 블록은 Block에 설정됨

글로벌 오브젝트에서 let 키워드를 사용해서 선언한 변수는 Script에 설정되며 모든 js 파일에서 변수를 공유함
-> var 변수와 let 변수 모두 모든 js 파일에서 변수를 공유함
-> let 만 사용해도 됨

블록 안에 let 변수로 선언
= 글로벌 오브젝트에 작성했지만 블록 안에 작성한 변수 = 글로벌 오브젝트의 로컬 변수
  이렇게 블록 안에 작성한 변수는 공유되지 않음


ES5에서는 글로벌 오브젝트라는 개념은 있었지만 실체는 없었음.
ES6의 let 변수는 Script라는 자바스크립트에서 만든 window 오브젝트 구조적 실체가 있음.
*/