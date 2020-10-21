// +, -, *, /, ++, --, **

// // +
// console.log('10'+2)
// console.log(10+2)

// const word1 = 'winter'
// const word2 = 'is'
// const word3 = 'coming'
// const word = (word1+' '+word2+' '+word3)
// console.log(word);
// console.log(`${word1} ${word2} ${word3}`);


// // %(나머지 연산자)
// const a =100
// const b =10
// console.log(a/b);
// console.log(100/10);
// console.log(a%b);
// console.log(5%2);


// // ++,--
// var score=10
// ++score   //잘안씀
// score++
// console.log(score);

// let number = 10
// console.log(number)
// number++
// console.log(number)
// number--
// console.log(number)


// let num1 = 10
// let num2 = ++num1
// console.log(num1, num2)

// let count1 = 10
// let count2 = count1++
// console.log(count1, count2);


// // 대입연산자
// let x=10
// let y=5
// x=x+y    // x+=y
// console.log(x);

// x=x-y    //x-=y
// console.log(x);

// x=x*y   //x*=y
// console.log(x);

// x=x/y  //x/=y
// console.log(x);

// x=x%y  //x%=y
// console.log(x);


// //비교연산자(>, <, >=, <=, ==, !=, ===, !==)
// let c='5'
// let d=5
// console.log(c>d);
// console.log(c<d);
// console.log(c!==d);
// // console.log(c===d);



// &&(and연산자) ||(or연산자) !(not연산자)
let a=100>10  //true
let b= 10<5   //false
let c=true  //true

// || 1개만 참이여도 참으로 인식
console.log(a||b||c);

// &&는 모두가 참이여야 참으로 인식
console.log(a&&b&&c);

b=!b
console.log(b);

b=!b
console.log(b);


// 삼항 연산자 (조건 ? 값1 : 값2)
const age =15
console.log(age > 20 ? '성인입니다' : '청소년');

