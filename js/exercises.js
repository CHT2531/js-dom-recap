const films=[
  {title:"Jaws", year:1975, duration:124},
  {title:"Get Out", year:2017, duration:117},
  {title:"Winter's Bone", year:2010, duration:100},
  {title:"The Incredibles", year:2004, duration:115},
]

let searchBox;
let filmList;
let goBtn;


function clearSearchResults(){
		while(filmList.firstChild){
	    filmList.removeChild(filmList.firstChild);
		}
}

function searchFilms(searchTerm){
	const matchingFilms = films.filter(function(film){
		if(film.title.toLowerCase().search(searchTerm)>-1){
		  return true;
		}else{
		  return false;
		}
	})
	return matchingFilms;
}

function displayResults(matchingFilms){
	const resultsFragment = document.createDocumentFragment()
	matchingFilms.forEach(function (film) {
  	const li = document.createElement('li')
  	li.textContent = film.title;
  	resultsFragment.appendChild(li)
	})
	filmList.appendChild(resultsFragment)
}



function doSearch()
{
	clearSearchResults()
	const searchTerm = searchBox.value.toLowerCase();
	if(searchTerm.length<2){
		return;
	}
	console.log(`The search term is ${searchTerm}.`);
	const matchingFilms = searchFilms(searchTerm);
	displayResults(matchingFilms);
}

function init(){
	searchBox = document.querySelector("#search-box");
	goBtn = document.querySelector("#go-btn");
	searchBox.focus();
	filmList = document.querySelector("#film-list");
	goBtn.addEventListener("click",doSearch);
	searchBox.addEventListener("keyup",doSearch);
}

window.addEventListener("load", init, false);
