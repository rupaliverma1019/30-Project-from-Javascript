const names = ["rupali" , "vivek" , "sonali" , "Bholi" , "Vibhu" , "Navedeet"];
const btn = document.getElementById("btn");
const data = document.getElementById("first");

btn.addEventListener("click" , (e)=>{
    e.preventDefault()
   const index =  Math.floor(Math.random()*6);
   console.log(index)
   data.textContent = names[index]
    
})
