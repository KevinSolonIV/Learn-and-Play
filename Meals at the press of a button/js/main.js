//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getMeal)

function getMeal(){
    let meal = document.querySelector('input').value

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.meals[0])
      let ingrList = document.getElementById("ingredients");
      while(ingrList.firstChild) {
        ingrList.removeChild(ingrList.firstChild);
      }
      let i = 1;
      while(data.meals[0]['strIngredient'+i] != '') {
        let ingredient = document.createElement('li');
        ingredient.innerText = data.meals[0]['strIngredient' + i];
        ingrList.appendChild(ingredient);
        i++;
      }
      document.querySelector('h2').innerText = data.meals[0].strMeal
      document.querySelector('img').src = data.meals[0].strMealThumb
      document.querySelector('h3').innerText = data.meals[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

