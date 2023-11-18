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