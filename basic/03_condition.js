// 1.조건 연산자-if, else if, else
console.log('조건 연산자 -if')

const age = 10
if(age >=20) {
  //조건이 참일때 코드가 실행됨
  console.log('성인입니다.')
} else{
  //조건이 거짓일때 코드가 실행됨
console.log('청소년 입니다.')
}


// 2.삼항조건 연산자
// 조건 ? 값1 : 값2
myAge >= 20 ? '성인' : '청소년'

const myAge = 30
console.log(myAge >= 20 ? '성인' : '청소년'); 


// 3.조건 연산자 - switch문
console.log('조건 연산자 -switch')

const color = 'blue'
switch (color) {
  case 'red' :
   console.log('i like red')
   break

   case 'blue' :
    console.log('i like blue')
   break

   case 'green' :
    console.log('i like green');
   break

  default:
    console.log('i dont know');
   break
}

//자동으로 구문을 만들 수 있음
switch (key) {
  case value:
    
    break;

  default:
    break;
}