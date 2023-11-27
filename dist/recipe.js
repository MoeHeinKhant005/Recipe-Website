function createList(list){
    for(let i = 0; i < list.length; i++){
        const ingredientList = document.querySelector('.ingredientList');
        ingredientList.innerHTML += `<li>${list[i]}</li>`;
    }
}

const recipe = JSON.parse(sessionStorage.getItem('recipeDetail'));
const recipeDetailContainer = document.querySelector('.recipeDetailContainer');
if(Object.keys(recipe).length > 0){
    recipeDetailContainer.innerHTML = 
    `<span class="w-11/12 text-gray-900 text-2xl font-lexend font-medium text-left px-4">${recipe.Title}</span>
    <img src=${recipe.Image} class="w-5/6 h-auto lg:w-11/12">

    <div class="w-11/12 h-auto flex flex-col justify-center items-start gap-y-4">
        <span class="text-gray-900 text-xl font-lexend font-medium text-left mx-2">Ingredients</span>
        <hr class="w-full border-0.5 border-gray-500 border-dashed ">
        <ul class="ingredientList list-disc list-inside text-base mx-2 flex flex-col justify-center items-start gap-y-4"></ul>
    </div>

    <div class="w-11/12 h-auto flex flex-col justify-center items-start gap-y-4">
        <span class="text-gray-900 text-xl font-lexend font-medium text-left mx-2">Instructions</span>
        <hr class="w-full border-0.5 border-gray-500 border-dashed">
        <p class="text-gray-800 text-base mx-2">${recipe.Instructions}</p>
    </div>`;
    createList(Object.values(recipe.Ingredients));
}else{
    location.href = "index.html";
}

