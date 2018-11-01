class Film
{
	constructor(title, year){
		this.title = title;
		this.year = year;
	}
}
let films=[]
films.push(new Film("Get Out","2017",117));
films.push(new Film("Jaws","1975",124));
films.push(new Film("Winter's Bone","2010",100));
films.push(new Film("The Incredibles","2004",115));



function doSearch()
{
	console.log("doSearch is working");
}

// 1. Add some JavaScript that will put focus on the search box when the page loads.

//2. Add some code so that the function doSearch() runs whenever the user clicks the GO button.

//3. Add some code in doSearch() so that each film title is displayed in the console (use a forEach to loop over the array of film objects).

//4. Modify the code in doSearch() so that it also displays whatever the user has typed into the text box (the user's search term) in the console.

//5. Modify the code in doSearch() so that only films that match the user's search term are displayed i.e. if the user enters "Jaws", only Jaws should be displayed in the console.

// 6. Modify the code so that the user doesn't have to enter the exact search term e.g. if they enter 'ja' they should get Jaws as a result. The search() method of JavaScript strings should help you. Uncomment the following example to see how it works:

/*
let title = "The Incredibles";
let searchTerm = "Incred";
console.log(title.search(searchTerm)) //outputs 4, the search term is found at the fourth character in the string
let anotherSearchTerm = "Jaws";
console.log(title.search(anotherSearchTerm)) //outputs -1, the search term can't be found in the string 
*/


// 7. Modify the code so that instead of displaying the films in the console they are displayed in the HTML page as <li> elements inside 'filmList' (look in the HTML)

// 8. A problem with this is that when the user searches again the results get added to the previous results. Add some code in doSearch() that will remove the previous search results. 

// 9. Modify the app so that the user doesn't have to use the correct case i.e. they can enter 'jaws' and still get the film Jaws as a result. If you aren't sure how to do this, do some research into the toLowerCase() method of JavaScript strings. 

//10. It would be good if the search ran whenever the user types into the search box i.e. they don't have to press the GO button. Add some code to your app so that the search runs in response to a keyup event.

// 11. One problem with the above is that if there isn't a search term we get a full list of films (try typing in a search term and then deleting it). Modify the code so that it only searches if there is at least one character in the search box. If you aren't sure how to do this, do some research into the 'length' property of JavaScript strings. 
