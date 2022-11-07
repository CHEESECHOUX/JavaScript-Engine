// 1. 함수 선언문, 함수 호출(), 함수 선언문
function music() {
  function getMusic() {
    return "crush1";
  };
  // 여기서 함수 호출
  console.log(getMusic());
  function getMusic() {
    return "crush2"
  };
};
music();

/*
결과 : crush2

1. 함수 선언문 해석
첫 번째 function getMusic의 function 오브젝트를 만듦 = 스코프에 이름: getMusic, value: crush1 로 function 오브젝트를 등록

첫 번째, 두 번째 함수선언문의 오브젝트 이름이 같아 두 번째 function getMusic의 value 값인 crush2로 스코프에 변경 

2. 변수 초기화
는 없고

3. 코드 실행
getMusic() 함수 호출 
스코프에서 두 번째 함수 선언문의 value 값으로 등록 해두었던 function 오브젝트를 찾음
함수를 호출해 return 값인 "crush2"를 콘솔에 출력
*/


// 2. 함수 표현식, 함수 호출(), 함수 표현식
function movie() {
  var getMovie = function() {
    return "Little Women1";
  };
  console.log(getMovie());
  var getMovie = function() {
    return "Little Women2";
  };
};
movie();

/*
결과 : Little Women1

1. 함수 선언문 해석
없음

2. 변수 초기화
getMovie 변수에 undefined 값 할당

3. 코드 실행
첫 번째 getMovie 변수에 function 키워드가 있으므로 function 오브젝트를 생성해 getMovie 변수에 할당.
getMovie가 function 오브젝트가 되었으니 getMovie 함수 호출 가능

console.log에서 getMovie 함수가 실행.
첫 번째 함수 블록으로 이동해 "Little Women1" 출력

두 번째 getMovie 변수에 function 키워드가 있으므로 기존의 getMovie 변수의 function 오브젝트 value 값이 "Little Women2"로 변경
*/


// 3. 함수 선언문, 함수 호출(), 함수 표현식
function Book() {
  function getBook() {
    return "JS책1";
  };
  console.log(getBook());
  var getBook = function() {
    return "JS책2";
  };
};
Book();

/*
결과 : JS책 1

1. 함수 선언문 해석
function getBook의 function 오브젝트를 만듦 = 스코프에 이름: getBook, value: "JS책1" 로 function 오브젝트 등록

2. 변수 초기화
getBook 변수에 undefined 값을 할당하려고 했으나, 이미 getBook이라는 이름의 function 오브젝트가 존재함

3. 코드 실행
첫 번째 getBook 변수에 function 키워드가 있으므로 function 오브젝트를 생성해 getBook 변수에 할당.
getBook이 function 오브젝트가 되었으니 함수 호출 가능해짐.

console.log에서 getBook 함수가 실행.
첫 번째 함수 블록으로 이동해 "JS책1" 출력

두 번째 getBook 변수에 function 키워드가 있으므로 기존의 getBook function 오브젝트의 value 값이 "JS책2" 로 변경
*/


// 4. 함수 표현식, 함수 호출(), 함수 선언문
function Bread() {
  var getBread = function() {
    return "단팥빵1";
  };
  console.log(getBread());
  function getBread() {
    return "단팥빵2";
  };
}
Bread();

/*
결과 : 단팥빵 1

1. 함수 선언문 해석
function getBread의 function 오브젝트를 만듦. 스코프에 이름: getBread, value: "단팥빵2"로 등록

2. 변수 초기화
getBread 변수에 undefined 값 할당하려고 했으나, getBread 이름의 function 오브젝트가 이미 존재해 기존의 값을 유지

3. 코드 실행
getBread 변수에 function 키워드가 있으므로 function 오브젝트를 생성해 
기존에 있던 getBread 변수의 function 오브젝트에 value 값을 "단팥빵1"로 변경

console.log에서 getBread 함수 실행
첫 번째 함수 블록으로 이동해 "단팥빵1" 출력
*/