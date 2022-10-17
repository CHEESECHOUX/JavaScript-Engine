// function object 생성 과정
const sports = function() {};

// 생성한 오브젝트가 sports에 할당됨.
// 오브젝트를 생성하는 시점에는 빈 오브젝트임

// sports 오브젝트 형태
sports = {
  arguments: {},
  caller: {},
  length: 0,
  name: "sports",
  prototype: {
    constructor: sports, // 
    __proto__: Object.prototype // 빌트인 오브젝트에 관련한 메소드들
  },
  __proto__: Function.prototype // bind, apply, call
}

/*
1. sports 오브젝트에 prototype 오브젝트 첨부

2. prototype에 constructor 프로퍼티 첨부 : 0개 이상의 property를 작성할 수 있게 됨
   값에는 object 이름을 작성. prototype.constructor가 sports 오브젝트 전체를 참조 하게 되는 것!

3. prototype에 __proto__ 오브젝트 첨부

4. 빌트인 Object.prototype의 메소드로 Object 인스턴스를 생성하여
   prototype.__proto__에 첨부

5. sports 오브젝트에 __proto__ 오브젝트 첨부 (prototype과 같은 레벨로)
   sports.__proto__ 구조가 됨.

6. 빌트인 Function.prototype의 메소드로 function 인스턴스를 생성해
   sports.__proto__에 첨부

7. sports 오브젝트 프로퍼티(argument, caller, length, name) 에 초기값 설정


엔진 관점으로 본다면 property(key: value)로 구성된 오브젝트!
*/