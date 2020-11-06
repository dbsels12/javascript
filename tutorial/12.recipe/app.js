const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')


const APP_ID = '930afa69'
const APP_KEY = '8b103edd1a66fd5fe6dc11a9b7ad407d'

function paintRecipe(items){
  console.log(items);

  let foods = ''
  items.map( item => {
    foods += `
    <div class="food">
    <div class="food_img">
      <img src="${item.recipe.image}" alt="food_img">
    </div>
    <div class="food_info">
      <div class="food_title">
        <h3>${item.recipe.label}</h3>
        <a href="${item.recipe.url}" target="_blank" class="btn">View Recipe</a>
      </div>
      <p class="food_extra">Caloris : ${item.recipe.calories.toFixed(2)}</p>
      <p class="food_extra">diet Label : ${item.recipe.dietLabels.length > 0 ? item.recipe.dietLabels : 'No data'}</p>
      <p class="food_extra">health Label : ${item.recipe.healthLabels}</p>
    </div>
  </div>`

  foodList.innerHTML = foods
  })
}

// fetch=코드를 가져오는거
async function getracipe(query){
  const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
  const response = await fetch(baseURL)
  const data = await response.json()
  paintRecipe(data.hits)
}

//input 작업할때 중요함   e.preventDefault() ★★★   < log에서 사라지지않음
function init(){
form.addEventListener('submit',e => {
  e.preventDefault()
  const query = input.value
  if(query ==='') return
  getracipe(query)
  input.value=''
})
}

init()

