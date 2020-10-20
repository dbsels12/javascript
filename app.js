// number
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log(sum);

// string
var str1='문자1';
var str2=' ';
var str3='문자2';
var str = str1+str2+str3;
console.log(str);

var a = 'hello';
var b = 'world';
console.log(a+b);
console.log(`${a} ${b}`);

// boolean
// var temp1=5>4;
// console.log(temp1);
// var temp2=5<4;
// console.log(temp2);

// console.log(Boolean(temp1))

// undefined
var temp1=10
var temp2
console.log(temp1)
console.log(temp2)

// object
var obj={
  name:'장길산',
  age:null
}
obj.name='홍길동'
obj.age=30

console.log(obj.name)
console.log(obj.age)

// typeof
var num=10
var str='문자'
console.log(typeof num)
console.log(typeof str)

console.log(`값은 ${num} 이고 ${typeof num}입니다`)
console.log(`값은 ${str}이고 ${typeof str}입니다`)

console.log('값은 '+10+'이고 '+typeof num+'입니다')