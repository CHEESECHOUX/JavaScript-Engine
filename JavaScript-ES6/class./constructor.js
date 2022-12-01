// constructor

// 클래스에 constructor 작성
class Point {
  constructor(point){
    this.point = point;
  }
};
const obj = new Point(100);


/*
1.const obj = new Point(100);
new 연산자로 Point 클래스 호출하면 클래스 함수의 constructor를 호출하게 됨

2.constructor(point){
point 파라미터 값이 100으로 설정됨

3.엔진이 빈 오브젝트 {}를 생성 = 인스턴스를 생성

4.인스턴스에 프로퍼티 이름과 값을 설정해 인스턴스 구조를 만듦
(__proto__, __proto__.constructor, 클래스의 메서드 등)

5.constructor 블록 실행

6.this.point = point; 의 this 가 생성한 인스턴스를 참조함
(3번에서 인스턴스를 먼저 생성하기 때문에 this로 인스턴스를 참조할 수 있는 것)

7.point는 인스턴스 프로퍼티가 됨
point 파라미터 값이 100이니까 point 프로퍼티 값도 100이 됨

8.생성한 인스턴스를 반환
*/


// constructor 미작성
class Point2 {
  setPoint(point2){
    this.point2 = point2;
  }
};
const obj2 = new Point2();
obj2.setPoint(100);
/*
1.엔진이 class 키워드를 만나 Point2 클래스 오브젝트를 생성할 때
constructor에서 클래스 전체를 참조하도록 환경을 만듦

2.constructor를 작성하지 않으면 
prototype.constructor를 사용하니까 인스턴스를 생성할 수는 있 지만
인스턴스에 초기값 설정을 할 수 없다.
(위의 예시는 this.point로 초기값을 설정했었음)

만약 클래스에 constructor를 작성한다면
prototype.constructor를 오버라이드(재정의로 보면 됨) 하게 되는 것!
*/ 




// constructor 반환

// constructor에서 Number, String 반환 (인스턴스를 반환함)
class Point3 {
  constructor(point3){
    this.point3 = point3;
    return point3;
  }
};
const obj3 = new Point3(100);
console.log(obj3.point3);
console.log(obj3 instanceof Point3);
/*
1.return point3;
constructor에서 파라미터로 받은 Number 타입의 ∫100을 반환하면
100이 아닌 생성한 인스턴스를 반환함
= obj3은 인스턴스가 됨

2.console.log(obj3.point3);
obj3는 인스턴스니까 프로퍼티로 값을 구할 수 있음

3.console.log(obj3 instanceof Point3);
obj3가 Point3 클래스로 만든 인스턴스니까 true 출력
*/ 


// constructor에서 object 반환 (object를 반환함)
class Point4 {
  constructor(point4){
    return {point4: point4};
  }
};
const obj4 = new Point4
console.log(obj4);
console.log(obj4 instanceof Point4);
/*
1.return {point4: point4};
constructor 에서 Object를 반환함

2.생성한 인스턴스를 반환하지 않고 return 표현식의 결과를 반환.
obj는 {point: point}가 됨 -> {point: 100}

3.console.log(obj4); 는 return한 Object가 출력됨

4.console.log(obj4 instanceof Point4); 는 
obj4가 Point4로 만든 인스턴스가 아니니까 false 출력
*/