const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
fetch(url)
.then(res => res.json())
.then(data => displayMeals(data.meals));

}

const displayMeals = meals => {

    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';
    meals.forEach(meal => {
       const menuDiv = document.createElement('div')
       menuDiv.classList.add('bg-white', 'p-2','rounded-xl')
        menuDiv.innerHTML = `
        <img class="rounded-xl drop-shadow-lg" src="${meal.strMealThumb}" alt="">
        <div class="mt-6 p-6">
        <h3 class="text-4xl font-bold mb-3">${meal.strMeal}</h3>
                <h3 class="mb-6 font-bold text-gray-400"><span class="text-md font-semibold text-orange-400">Dishes:</span> ${meal.strCategory}</h3>
                <p class="mb-6">${meal.strInstructions.slice(0, 200)}</p>
                <button class="bg-red-600 text-white text-xl font-bold px-12 py-4 my-12 rounded-lg hover:bg-red-800" onclick="window.location.href='${meal.strYoutube}'">Watch Tutorial</button>
        </div>

        `;
        menuContainer.appendChild(menuDiv)
    });
}

const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    loadMeals(searchText);
    searchField.value ="";


}

loadMeals('');