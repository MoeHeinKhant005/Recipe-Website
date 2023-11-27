const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8aec078454msh88978a01b27ef93p155bb3jsn4307bb337508',
		'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
	}
};

async function getData(query){
    const response = await fetch(`https://food-recipes-with-images.p.rapidapi.com/?q=${query}`, options);
    const data = response.json();
    return data;
}

function createRecipeItems(data){
    resultContainer.innerHTML = "";
    for(let i = 0; i < data.d.length; i++){
        resultContainer.innerHTML += 
        `<div class="recipeItem w-5/12 h-auto flex flex-col justify-start items-center bg-white shadow gap-y-3 transition-all duration-150 ease-in-out hover:shadow-lg md:w-1/4 lg:w-1/6">
            <img src=${data.d[i].Image} class="w-full h-auto">
            <div class="w-full h-auto flex flex-col justify-center items-center gap-y-3 pb-4">
                <span class="text-primary text-xs text-center mx-2"><i class="bx bx-food-menu text-primary text-xs"></i> - ${Object.keys(data.d[i].Ingredients).length} Ingredients</span>
                <hr class="w-5/6 border-0.5 border-primary">
                <span class="text-gray-800 text-xs text-center mx-2.5 line-clamp-2">${data.d[i].Title}</span>
            </div>
        </div>`;
    }
    resultContainer.querySelectorAll('.recipeItem').forEach(item => {
        item.addEventListener('click', e => {
            sendRecipeData(e.currentTarget.lastElementChild.lastElementChild.textContent, queriedData);
            location.href = "recipe.html";
        })
    })
}

function sendRecipeData(recipeName, datalist){
    for(let i = 0; i < datalist.d.length; i++){
        if(recipeName === datalist.d[i].Title){
            sessionStorage.setItem('recipeDetail', JSON.stringify(datalist.d[i]));
        }
    }

}

const foodInput = document.querySelector('.foodInput');
const searchBtn = document.querySelector('.searchBtn');
const resultContainer = document.querySelector('.resultContainer');
let queriedData;

searchBtn.addEventListener('click', e => {
    if(foodInput.value != ""){
        getData(foodInput.value).then(data => {
            if(data.d.length > 0){
                queriedData = data;
                createRecipeItems(queriedData);
            }else{
                resultContainer.innerHTML = `<p class="text-primary text-center text-lg my-4">Sorry, We couldn't find any recipe!</p>`;
            }
        });
    }
})