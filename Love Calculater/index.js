const form = document.getElementById("form")
form.addEventListener("click" , (e)=>{
e.preventDefault()
const boy = document.getElementById("boy")
const girl = document.getElementById("girl")
const boyDigit = boy.value.length;
const girlDigit = girl.value.length;
const result = Math.pow(boyDigit+girlDigit,3)%101;
console.log(result);
const showResult = document.getElementById("result")
showResult.textContent = result;
})


