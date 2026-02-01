const body = document.querySelector("body");
body.addEventListener('click', (e)=>
{
console.log(e.clientX , e.clientY)
const newElement =    document.createElement("div");
console.log(newElement)
newElement.classList.add("color")
const symbols = ["★", "❤", "✿", "✦", "☀", "☁", "❄", "✈", "⚡", "😊"];
    newElement.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];
const color = ["pink" , "orange" , "indigo" , "red" , "blue" , "green" , ]
newElement.style.backgroundColor =  color[Math.floor(Math.random()*6)];
newElement.style.top = e.clientY + "px";
newElement.style.left = e.clientX + "px";
newElement.style.position = "absolute";
body.appendChild(newElement)

})

// The code adds a click event listener to the entire body of the page.

// When the user clicks, it gets the mouse X and Y coordinates.

// A new div element is created dynamically and assigned the class color.

// A random symbol and a random background color are selected using Math.random().

// The div is positioned at the click location using absolute positioning and added to the DOM.

