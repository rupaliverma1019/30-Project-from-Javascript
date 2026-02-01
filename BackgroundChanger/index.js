const colorChanger = document.getElementById("parent");
colorChanger.addEventListener("click" , (e)=>{
    e.preventDefault()
    const btn = e.target;
    console.log(e.target)
    const body = document.querySelector('body')
    body.style.backgroundColor = btn.id
})
