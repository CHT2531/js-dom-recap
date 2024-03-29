# JavaScript - The Document Object Model and Event Handling
The following is a brief overview of some key topics in JavaScript. They should familiar if you took my Year 1 module.

## Selecting elements
Often we need to get hold of parts of the HTML page. You should be familiar with methods such as ```document.getElementById()``` and ```document.querySelector()```. These days ```querySelector()``` and ```querySelectorAll()``` are supported by many browsers and are often favoured for their flexibility.

### querySelector()
Here's an example of selecting a div element:

HTML
```html
<div id="output">Lorem ipsum dolar</div>
<p>This is a paragraph</p>
<p>This is another paragraph</p>
<p>This is a third paragraph</p>
```

JavaScript
```javascript
const outputDiv=document.querySelector("#output");
console.log(outputDiv); //<div id="output">Lorem ipsum dolar</div>
```
### querySelectorAll()
*querySelectorAll()* returns multiple elements as a NodeList (like an array). Here's an example:

HTML
```html
<div id="output">Lorem ipsum dolar</div>
<p>This is a paragraph</p>
<p>This is another paragraph</p>
<p>This is a third paragraph</p>
```
JavaScript
```javascript
const paras = document.querySelectorAll("p");
paras.forEach(function(para){
	console.log(para)
})
```
Output
```
<p>This is a paragraph</p>
<p>This is another paragraph</p>
<p>This is a third paragraph</p>
```

## Creating and removing content using ```innerHTML```
There are a number of approaches to inserting content into a page. These notes look at ```innerHTML``` and ```document.createElement()```. ```innerHTML``` has a cleaner simpler syntax, so is easier to learn.  

### Inserting single elements
Here's an example of inserting a single paragraph element into the page.

HTML
```html
<div id="content">This is a div.</div>
```

JavaScript
```javascript
const divElem = document.querySelector("#content"); //get hold of the <div>
divElem.innerHTML=`<p>new text</p>`; //insert the new element into the <div>
```
This would result in the div element changing to:-

```html
<div id="content"><p>new text</p></div>
```

### Inserting multiple elements
Often we want to do this using a loop. Notice the use of ```+=```. This allows us to add content to the ```div``` without deleting the existing content. 

HTML
```html
<div id="content"></div>
```

JavaScript
```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];

const divElem = document.querySelector("#content"); //get hold of the <div>
countries.forEach(function(country){
	divElem.innerHTML += `<p>`;
	divElem.innerHTML += `${country.name} has a population of ${country.population}.`;
	divElem.innerHTML += `</p>`;
})

```
Would result in:-

```html
<div id="content">
  <p>England has a population of 53000000.</p>
  <p>France has a population of 67000000.</p>
  <p>USA has a population of 325000000.</p>
</div>
```

### Removing Elements
We simply need to set the ```innerHTML``` value to be an empty string.

```
const divElem = document.querySelector("#content"); //get hold of the <div>
divElem = "";
```

## Creating and removing content using ```document.createElement()```.

### Inserting single elements
Here's an example of inserting a single paragraph element into the page.

HTML
```html
<div id="content">This is a div.</div>
```

JavaScript
```javascript
const divElem = document.querySelector("#content"); //get hold of the <div>
const newParagraph = document.createElement("p"); //create a <p> element
const newText = document.createTextNode("new text"); //create some text
newParagraph.appendChild(newText); //insert the text into the <p>
divElem.appendChild(newParagraph); //insert the <p> into the <div>
```
This would result in the div element changing to:-

```html
<div id="content">This is a div.<p>new text.</p></div>
```

### Inserting multiple elements
Using a ```forEach``` loop we can iterate over an array and generate new HTML elements for each item in the array.

HTML
```html
<div id="countries"></div>
```

JavaScript
```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];

const countriesDiv = document.querySelector("#countries"); //get hold of the div from the page
countries.forEach(function(country){
    const newParagraph = document.createElement("p"); //create a <p> element
    newParagraph.textContent = `${country.name} has a population of ${country.population}.`; //insert text into the <p>
    countriesDiv.appendChild(newParagraph); // insert the <p> into the <div>
});

```
Would result in:-

```html
<div id="countries">
  <p>England has a population of 53000000.</p>
  <p>France has a population of 67000000.</p>
  <p>USA has a population of 325000000.</p>
</div>
```

### Removing a single element

HTML

```html
<div id="content">This is a div.</div>
```

JavaScript
```javascript
const divElem = document.getElementById("content");
divElem.removeChild(divElem.firstChild);
```
Would result in
```html
<div id="content"></div>
```

### Removing multiple elements

We can use a *while* loop to remove multiple child elements

HTML

```html
<div id="countries">
  <p>England has a population of 53000000.</p>
  <p>France has a population of 67000000.</p>
  <p>USA has a population of 325000000.</p>
</div>
```

JavaScript
```javascript
const countriesDiv = document.querySelector("#countries");
while(countriesDiv.firstChild){
    countriesDiv.removeChild(countriesDiv.firstChild);
}
```
Would result in:-
```html
<div id="countries">
</div>
```
## Manipulating attributes
We can use ```setAttribute()``` to change the HTML attribute of an element. For example:

Before the JavaScript is executed.
```html
<img src="" alt="">
```

```javascript
const userChoice = prompt("Which countries flag would you like to see?"); //user answers 'usa'
const imgElem = document.querySelector("img");
imgElem.setAttribute("src", `images/${userChoice}.png`);
imgElem.setAttribute("alt", `${userChoice} flag`);
```
After the JavaScript has been executed.
```html
<img src="img/usa.png" alt="usa flag">
```

Similarly there is a ```getAttribute()``` method to read HTML attributes. 


## Changing the CSS of an element
All DOM elements have a *classList* property that maintains a list of classes currently applied to the element. We can add and remove CSS classes using the classList.

```javascript
const outputDiv=document.querySelector("#output");
outputDiv.classList.add("sold"); //adds the CSS class 'sold'
outputDiv.classList.remove("for-sale"); //removes the CSS class 'for-sale'
```

## Events
Using JavaScript we can listen for events and run code when an event happens. Here's an example. When the user clicks on the button, the function *doIt()* will be executed.

HTML
```html
<input type="button" id="btn">
```

JavaScript
```javascript
function doIt()
{
    console.log("button was clicked");
}
const btn=document.querySelector("#btn"); //get hold of the button
btn.addEventListener("click", doIt, false); //when the button is clicked run the function doIt()
```
We can listen for lots of different events, when the page loads, when a key is pressed, when the mouse moves etc.

## Working with Form Controls
We can 'read' the values users enter into HTML form controls using the value property.

HTML
```html
<input type="text" id="txt-box">
```

JavaScript
```javascript

const txtBox=document.querySelector("#txt-box"); //get hold of the text box
console.log(txtBox.value); //displays whatever the user has entered into txtBox.
```

Form controls have other properties and methods e.g. we can put focus on a form control.

JavaScript
```javascript
const txtBox=document.querySelector("#txt-box"); //get hold of the text box
txtBox.focus(); //apply focus to the txt box
```

## Additional resources
If you are struggling there are lots of resources online. For example:
* JavaScript.info [https://javascript.info/document](https://javascript.info/document)
* Udacity offer a short course on the DOM [https://www.udacity.com/course/javascript-and-the-dom--ud117](https://www.udacity.com/course/javascript-and-the-dom--ud117)
* Mozilla Developer Network (MDN) [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model] (https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).
