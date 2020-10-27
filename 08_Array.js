// Array 배열

// 1.배열 만들기
const arr1 = new Array()
console.log(arr1);

const arr2 = [1, 3, 5, 7, 9]
console.log(arr2);

const arr3 = ['what', 'are', 'you', 'doing', 100, true]
console.log(arr3);

const arr4 = [
  'a',
  {model: 'apple', price: 1000},
  {model: 'galaxy', price: 2000},

]

console.log(arr4);
console.log(arr4[1].model);

// 2.배열출력
var a = 1
var b = 2
const c = 3

const books = ['html', 'css', 'javascript']

console.log(books);
console.log(books.length) //3
console.log(books[0])
// 배열의 마지막을 출력할때
console.log(books[books.length-1])
//lenght 는 마지막을 표시하는 코드 갯수가 많아질때는
// lenght-1로 표현하면 갯수가 몇개로 늘어나던 마지막을 표시해줌


console.clear()
// 3.Loop출력
// -for문
for(let i =0; i < books.length; i++){
  console.log(books[i])
}

// -for of
for(let book of books){
  console.log(book)
}

// forEach  <매서드(오브젝트 안에 있는 함수[순회함])
// 함수는 괄호 필수
books.forEach(function(item){
  console.log(item)
})

books.forEach((item) =>{
  console.log(item)
})

books.forEach(item => console.log(item))

books.forEach(book => {
  console.log(book +'hello')
})  //순회하면서 뒤에 헬로우를 붙여줌

// 4. 추가, 삭제
// -뒤에 추가  push
books.push('jquery')
console.log(books)

books.push('vue')
console.log(books)

// -앞에서 추가  unshift
books.unshift('react')
console.log(books)

// -뒤에서 삭제  pop
books.pop()
console.log(books)

// -앞에서 삭제  shift
books.shift()
console.log(books)


// -splice : 지정한 위치에서 삭제, 추가 ★★
//       위치↓  ↓삭제   ↓ 추가 ↓  
books.splice(2, 1, 'react', 'vue')
console.log(books)

// -두개의 배열을 합치기 concat
const books2 = ['git', 'nodejs']
const newBook = books.concat(books2)
console.log(newBook)

// 5. 검색
console.clear()
console.log(books)
console.log(books.indexOf('react'))
console.log(books.includes('css'))
console.log(books.includes('github'))