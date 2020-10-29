// 오브젝트 object
// -자바스크립트 데이터
// -상태와 행동을 가진다★★
// -phone의 상태(properties) -> Color, size, 
// -phone의 행동(methods) -> ring, take a picture, play music
// -형식 ( 키 : 값 ) 프로포티스 줄때 ,줘야함



// 1.object
const user = {
  name : 'Picaso',
  age : 30,
  email : 'picaso@gmail.com',
  works : [
    {id:1, title:'게르니카', price:10000, like:50},
    {id:2, title:'아비뇽의 처녀들', price:30000, like:80},
    {id:3, title:'우는 여인', price:50000, like:200},
  ],
  // login : function ()
  // console.log('user logged in!')

  
login() {
  console.log('user logged in!')
},
  

logout() {
  console.log('user logged out!')
},

goodWorks : function() {
 console.log('피카소의 대표작')
 this,works,forEach(work =>{
   console.log(`${work.id}, ${work.title}, ${work,price}원, 좋아요(${work.like})`)
 })
}
}

console.log(user);
console.log(user.name);
console.log(user.goodWorks);

// //수정
user.age = 45
console.log(user.age);

// //타입확인
console.log(typeof user);

//methods

user.login()
user.logout()
user.goodWorks()




// 2.math object

console.log(math)
console.log(math.PI)

const sum = 9.7
console.log(Math, round(sum));
console.log(Math, floor(sum));
console.log(Math, ceil(sum));
console.log(parseInt(sum));


// ramdom Number
const num = Math.random()
console.log(num);


// 0 ~ 9 사이의 정수 출력
console.log(Math. floor.(Maht.random() * 10));


// 1 ~ 10 사이의 정수 출력
console.log(Math. floor.(Maht.random() * 10 + 1));


// 배열 랜덤 출력
const food = ['라면', '김밥', '우동']
const randomNum = Math.floor(Math.random() * food.length)
console.log(food[randomNum]);



