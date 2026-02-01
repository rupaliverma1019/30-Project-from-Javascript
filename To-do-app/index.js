const form = document.querySelector("form");
const alltask = document.querySelector("#alltask");
const input = document.querySelector("input");
form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    const text = input.value.trim();
    if(text==0)
    {
        return;
    }
    const parent = document.createElement("div");
    const task = document.createElement("span");
    task.textContent = "text";
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    const done = document.createElement("button");
    done.textContent = "done";

    parent.append(task , deletebtn , done)
    console.log(alltask.append(parent))
    deletebtn.addEventListener("click" , ()=>{
        parent.remove();
    })
    done.addEventListener("click" , ()=>{
       task.style.color = "red";
    })
    input.value= "";

})
