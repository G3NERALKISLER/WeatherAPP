const apikey ="524b57bdb125cfc01eee029ca75bed27"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.getElementById("search-box")
const searchBtn = document.getElementById("search-btn")
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city) {
 const response = await fetch(apiurl +city + `&appid=${apikey}`)
    if(response.status== 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
        var data =await response.json()
        document.querySelector(".city").innerHTML= data.name
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C"
        document.querySelector(".humidity").innerHTML= data.main.humidity+ "%"
        document.querySelector(".wind").innerHTML= data.wind.speed+ " km/h"
    if (data.weather[0].main=="Clouds"){
            weatherIcon.src="cloudy.png"
    }
    else if (data.weather[0].main=="Mist"){
            weatherIcon.src="mist.png"
        }
    else if (data.weather[0].main=="Clear"){
            weatherIcon.src="clear.png"
        }
    else if (data.weather[0].main=="Rain"){
            weatherIcon.src="Rain.png"
        }
    else if (data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.png"
        }


       
       
        document.querySelector(".weather").style.display ="block"
        document.querySelector(".error").style.display = "none";
        
}
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
document.addEventListener("DOMContentLoaded", () => {
    checkWeather("Nairobi");
  });