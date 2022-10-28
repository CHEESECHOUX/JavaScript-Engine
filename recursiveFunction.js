var music = {
	member: { name: 100 },
	point: { value: 200 }
};
function show(param) {
	for (var type in param) {
		typeof param[type] === "object"
			? show(param[type])
				: console.log(type + ":", param[type]);
	}
};
show(music);

/*
실행 결과
name:100
value:200

1.show(music); 함수 호출
  music 오브젝트를 파라미터 값으로 넘겨줌
2.for-in 으로 파라미터로 받은 오브젝트를 전개
3.맨 처음 들어오는 오브젝트는 member와 값 { name: 100 }
4.다시 자신(show 함수)을 호출 
  이때 들어오는 값은 { name: 100 }
5.type 에는 name
  param 에는 { name: 100 }
6.param의 type 값은 100 → 오브젝트가 아님
7.오브젝트가 아니니까 출력
8.for-in 문으로 다시 반복해서 
  point: { value: 200 } 오브젝트를 받고 value:200까지 출력
*/