//
// 함수 선언문 (Function Declaration)
function music(one, two) {
  return one + ", " + two;
};
console.log(music("crush", "emily king"));


//
// 함수 표현식 (Function Expression)
var getMusic = function (title) {
	return title;
};
getMusic("crush");

// 식별자 위치의 함수 이름
// 함수 이름이 두 개(getMusic, inside), 요즘에는 잘 사용 안 함
var getMusic = function inside(value) {
	if (value === 102) { // 무한 반복을 피하기 위해 빠져나가는 코드를 작성해야함
		return value;
	};
	console.log(value);
	return inside(value + 1); // 재귀 함수 : 함수 안에서 자신을 호출 하는 것
};
getMusic(100);





// new Function 