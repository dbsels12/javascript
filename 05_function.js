
// 1.function
// - 함수 선언 과 함수 호출
function myFunc(){
 console.log('안녕, 자바스크립트~~~~~');
}

myFunc()


const sayHello = function(){
  console.log('hello~~~~')
}

sayHello()


// 2.매개변수 Parameter

function printMessage(message){
  console.log(message)
}

printMessage('하하하')
printMessage('파파파')


// 3.기본 파라미터(es6)
// 네임을 적을때 미리 적어놓으면 언디파인드 안뜸

function showInfo(title, name = '스티븐잡스'){
  console.log(`${title} by ${name}`);

}

showInfo('게르니카','피카소')
showInfo('풍경')


// 4.Reset 파라미터 / Spread 연산자(es6)
function printAll(...items){
  // for(let i = 0; i < items.length; i++){
  //   console.log(items[i])
  // }
  for (const item of items){
  console.log(item);
  }
}

printAll('봄','여름','가을','겨울')

// 5.Scope
let movie = '하하하'   //global 변수(전역변수)

function paintmovie(){
  let myMovie = '생활의 발견'   //local 변수(지역변수)
  console.log(myMovie)
  console.log(movie)
}

paintmovie()


// 6.Return
function plus(a, b){
  console.log('안녕하세요')
  return a + b  //15

}
const result = plus(5, 10)

console.log(result)


// 7.Callback function 함수
const call = function(myName, printPicaso, printjobs){
  if(myName === 'Picaso'){
  printPicaso()
  }else{
    printjobs()
  }

}

const printPicaso = function(){
  console.log('I am Picaso')
}

const printJobs = function(){
  console.log('im jobs')
}

call('Picaso', printPicaso, printJobs)


// 8.Arrow function  (표현식★★)
// const add = function(a, b){
// console.log(a + b)
// return a + b
// }

const add = (a, b) =>{return a + b}

const sum = add(5, 8)
console.log(sum)


// (선언식★★) 이름이 없는거는 화살표로 안바꿈
// function printHello(){
//   console.log('안녕하세요');
//   console.log(this);

// }

// const printHello = (a) =>{
//   console.log(this)

// }

// const printHello = (a, b) =>{
//   console.log(this)

// }

printHello()

