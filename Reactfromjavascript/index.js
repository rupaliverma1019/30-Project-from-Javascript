// you have to show hello world unsing js

// const element1 = document.createElement("h1");
// element1.textContent = "Hello World";
// element1.className = "text"
// element1.id = "first";
// element1.style.color = "darkblue";
// element1.style.border = "1px solid black";

// const element2 = document.createElement("h2");
// element2.textContent = "Hello World element 2";
// element2.className = "text"
// element2.id = "second";
// element2.style.color = "darkgrey";
// element2.style.border = "1px solid black";
// element2.style.backgroundColor = "red";



function createElement(tag , attributes , content){
    const element = document.createElement(tag)
    element.textContent = content;
    for(const key in attributes)
    {
        element[key] = attributes[key];
    }
return element

}
const element1 = createElement("h1" , {
    className: "text",
    id: "first",
    style: { color: "red", border: "1px solid green" },
  },  "Hello world Rupali")
const root = document.getElementById("root")
root.append(element1);
// root.append(element2)