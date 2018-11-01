# JavaScript - The Document Object Model and Event Handling
The following is a brief overview of some key topics in JavaScript. They should familiar if you took my Year 1 module. 

## Selecting elements
Often we need to get hold of parts of the HTML page. You should be familiar with methods such as *document.getElementById()* and *document.querySelector()*. These days *querySelector()* and *querySelectorAll()* are supported by many browsers and are often favoured for their flexibility. Here's an example of selecting a div element:

HTML
```html
<div id="output">
Lorem ipsum dolar
</div>
```

JavaScript
```javascript
const outputDiv=document.querySelector("#output");
console.log(outputDiv); //<div id="output">Lorem ipsum dolar</div>
```

## Adding text to an element
Again there are several ways to do this. Here's one that uses *createTextNode*.

HTML
```html
<div id="content">This is a div.</div>
```

JavaScript
```javascript
const divElem = document.querySelector("#content"); //get hold of a <div>
const textNode = document.createTextNode("This is some new text."); //create the text
divElem.appendChild(textNode); //insert the text into the <div>
```
This would result in the div element changing to:-
```html
<div id="content">This is a div.This some new text.</div>
```

## Creating new elements
To do this we use *document.createElement()*. Here's an example.

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

We can do the same thing using a loop e.g.

JavaScript
```javascript
const divElem = document.querySelector("#content");
const countries=["England","Scotland","Wales","Northern Ireland"];
countries.forEach(function(country){
    const newParagraph = document.createElement("p"); //create a <p> element
    const newText = document.createTextNode(country)); //create some text
    newParagraph.appendChild(newText); //insert the text into the <p>
    divElem.appendChild(newParagraph); //insert the <p> into the <div>
});

```
Would result in:-

HTML
```html
<div id="content">
<p>England</p>
<p>Scotland</p>
<p>Wales</p>
<p>Northern Ireland</p>
</div>
```

## Removing Elements
To do this we can use *removeChild()*.

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

Again we can use a loop to remove multiple child elements

HTML

```html
<div id="content">
<p>England</p>
<p>Scotland</p>
<p>Wales</p>
<p>Northern Ireland</p>
</div>
```

JavaScript
```javascript
const myDiv = document.getElementById("content");
while(myDiv.firstChild){
    myDiv.removeChild(myDiv.firstChild);
}

```

Would result in:-
```html
<div id="content">
</div>
```

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
let btn=document.querySelector("#btn"); //get hold of the button
btn.addEventListener("click", doIt, false); //when the button is clicked run the function doIt()
```
We can listen for lots of different events, when the page loads, when a key is pressed, when the mouse moves etc. 

## Working with Form Controls
We can 'read' the values users enter into HTML form controls using the value property.

HTML
```html
<input type="text" id="txtBox">
```

JavaScript
```javascript

const txtBox=document.querySelector("#txtBox"); //get hold of the text box
console.log(txtBox.value); //displays what ever the user has entered into txtBox. 
```

Form controls have other properties and methods e.g. we can put focus on a form control.

JavaScript
```javascript
const txtBox=document.querySelector("#txtBox"); //get hold of the text box
txtBox.focus(); //apply focus to the txt box
```



## Additional resources
If you are struggling there are lots of resources online

### Beginner tutorials:
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript
* https://channel9.msdn.com/Series/JavaScript-Fundamentals-Development-for-Absolute-Beginners 
* https://www.khanacademy.org/computing/computer-programming/html-css-js


### Reference sites
* Mozilla Developer Network https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference 


