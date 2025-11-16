const h2Element = document.querySelector('h2');
h2Element.style.color = 'blue';
h2Element.style.backgroundColor = 'lightgray';
h2Element.style.padding = '10px';

console.log(h2Element);

const aboutUsParagraph = document.querySelector('#aboutUs');
console.log(aboutUsParagraph);

const spanElements = document.querySelectorAll('#aboutUs span');
console.log(spanElements);

const menuElement = document.querySelector('ul.menu li:nth-child(2)');
console.log(menuElement);

h2Element.textContent = 'Hello DOM Manipulation!';
h2Element.innerText = 'Welcome to JavaScript DOM';

