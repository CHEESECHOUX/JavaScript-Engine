// this와 callback 함수
var obj = { value: 100 };
var data = [5, 6, 7];

function callback(element, index, data) { // 콜백 함수
	return element + this.value; // 3 5
};
function get(data) { // get 함수 아래에서 호출함
	return data.map(callback, obj); // 2 4
};
var result = get(data); // 1
console.log(result);

/*
실행 결과
[105, 106, 107]


1.get 함수를 호출하면서 data(파라미터 값)를 넘겨줌

2.ES5의 map(), forEach() 처럼 콜백 함수가 있는 메서드는
  첫 번째 파라미터에 callback 함수 작성
  배열의 element를 하나씩 읽어가며 반복하게 됨

  두 번째 파라미터에 this로 참조할 오브젝트를 작성
  callback 함수에서 this로 참조할 오브젝트

  → callback 함수가 호출되면 element는 5, index는 0, data는 [5, 6, 7] 설정

3.return element + this.value;
  5 + 100 
  105 반환

4.map 메소드에서 최종적으로 반환할 배열에 105를 첨부
  callback 함수 호출

5.element 를 6으로 호출


callback 함수는 독립적이다.
map 메서드의 역할은 callback 함수를 호출하면서, 두 번째 파라미터에 오브젝트가 있으면 넘겨주는 것(데이터를 넘겨주는게 목적)

callback 함수에서 처리할 수 있는 element, index, data는 배열로 파라미터로 넘겨줌
& this로 참조할 오브젝트는 map 함수에서 넘겨줌
그럼 나머지는 callback 함수에서 처리함

데이터 중심으로 처리 하는 것!!!

각자 독립성을 갖고(하나의 묶음 처럼) 일처리를 하게 코드를 작성 한다면?
데이터만 변경해주면 계속 효율적으로 처리 가능!
*/