const api_key = "47713f947e623bc7c797d3a1b061330e"

console.log("api_url")
async function weather(e)
{
    e.preventDefault()
    const state = document.getElementById("state").value.trim();
    console.log(state);
    if(!state)
    {
        return
    }
    const api_url = `https://api.openweathermap.org/data/2.5/forecast?q=${state}&appid=${api_key}&units=metric`;
    try {
      const response =   await fetch(api_url)
      const data =  await response.json()
      console.log(data)
      document.getElementById("place").textContent = data.city.name;
      document.getElementById("temperature").textContent = `${data.list[0].main.temp}°`
      document.getElementById("windspeed").textContent = `${data.list[0].wind.speed}km/hr`;
      document.getElementById("humidity").textContent = data.list[0].main.humidity;

    } catch (error) {
        console.log(error)
    }
     
}
