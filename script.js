import { apiKey, uri }  from './config.js'; 

const dictionary = (word)=> {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': uri
	}
};


fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
.then (response => response.json())
.then ((response) => {

	if (response.valid==true){
		console.log(response);
		definition.innerText = response.definition;
	}
	else{
		definition.innerText = 'Sorry, the word you searched for could not be found!'
	}
})
.catch(err => console.error(err));
}


srchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
});



