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

const foodInput = document.querySelector('.foodInput');
const searchBtn = document.querySelector('.searchBtn');
const resultContainer = document.querySelector('.resultContainer');

searchBtn.addEventListener('click', e => {
    if(foodInput.value != ""){
        getData(foodInput.value).then(data => {
            if(data.d.length > 0){
                console.log(data.d);
            }else{
                resultContainer.innerHTML = `<p class="text-primary text-center text-lg my-4">Sorry, We couldn't find any recipe!</p>`
            }
        });
    }
})