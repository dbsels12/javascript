const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
console.log(input)
console.log(btn)
console.log(result)

btn.addEventListener('click', function (e) {
  e.preventdefault()
  const value = input.value
  result.textcontent = value
})