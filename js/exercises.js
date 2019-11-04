const films=[
  {title:"Jaws", year:1975, duration:124},
  {title:"Get Out", year:2017, duration:117},
  {title:"Winter's Bone", year:2010, duration:100},
  {title:"The Incredibles", year:2004, duration:115},
]
let searchBox;
let filmList;
let goBtn;

function doSearch()
{
	console.log("doSearch is working");
}


// 1. Add some JavaScript that will put focus on the search box when the page loads.

//2. Add some code so that the function doSearch() runs whenever the user clicks the GO button.

//3. Add some code in doSearch() so that each film title is displayed in the console (use a forEach to loop over the array of film objects).

//4. Modify the code in doSearch() so that it also displays whatever the user has typed into the text box (the user's search term) in the console.

//5. Modify the code in doSearch() so that only films that match the user's search term are displayed i.e. if the user enters "Jaws", only Jaws should be displayed in the console. Make sure you use a filter.

// 6. Modify the code so that the user doesn't have to enter the exact search term e.g. if they enter 'ja' they should get Jaws as a result. The search() method of JavaScript strings should help you. You may have an example from a previous practical or uncomment the following example to see how it works:

/*
let searchTerm = "a";
let title = "Jaws";
console.log(title.search(searchTerm)) //outputs 1, the search term is found at the second character in the string
if(title.search(searchTerm)>-1){
  console.log(`The search term '${searchTerm}' was found.`);
}else{
  console.log(`The search term ${searchTerm} was not found.`);
}
*/


// 7. Modify the code so that instead of displaying the films in the console they are displayed in the HTML page as <li> elements inside 'filmList' (look in the HTML)

// 8. A problem with this is that when the user searches again the results get added to the previous results. Add some code in doSearch() that will remove the previous search results.

// 9. Modify your application so that the user doesn't have to use the correct case i.e. they can enter 'jaws' and still get the film Jaws as a result. If you aren't sure how to do this, do some research into the toLowerCase() method of JavaScript strings.

//10. It would be good if the search ran whenever the user types into the search box i.e. they don't have to press the GO button. Add some code to your app so that the search runs in response to a keyup event.

// 11. One problem with the above is that if there isn't a search term we get a full list of films (try typing in a search term and then deleting it). Modify the code so that it only searches if there is at least one character in the search box. If you aren't sure how to do this, do some research into the 'length' property of JavaScript strings.

// 12. If you look at the code in doSearch() you will probably find that it stretches over many different lines. How can you re-factor the code to split doSearch() into a number of smaller focussed functions?
