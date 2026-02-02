
async function searchInput(e)
{
   e.preventDefault();
    const inputText = document.getElementById("text").value.trim();
    console.log(inputText)
    if(!inputText)
     {
        return;     
    }
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`
    try {
        const response = await fetch(url)
        
        const data = await response.json()
        
        const meaning =  data[0].meanings[0].definitions[0].definition;
        const opposite = data[0].meanings[0].antonyms
        console.log(meaning)
        document.getElementById("meaning").textContent = meaning
         document.getElementById("opposite").textContent = opposite

    } catch (error) {
        
    }
}


