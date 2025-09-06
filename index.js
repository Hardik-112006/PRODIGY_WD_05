let apiURl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

let apikey = "59405f60d348b3ec3a93ba5d04ae2e20&"
let temp = document.getElementById("temp");
let city = document.getElementById("city");
let humidity = document.getElementById("dh");
let wind = document.getElementById("dw");
let search = document.querySelector(".search input")
let btn = document.getElementById("btn")
let image = document.querySelector(".weatherstatus img")
let weatherstatus = document.querySelector(".weatherstatus")
let card = document.querySelector(".card")
let invalid = document.getElementById("invalid")

async function checkweather(cityy){
    let response = await fetch(apiURl + cityy + `&appid=${apikey}`)
    let data = await response.json()
    if(data.cod == "404"){
        invalid.style = "display:block"
    }
    else{
         invalid.style = "display:none"
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
     humidity.innerHTML = data.main.humidity + "%";
      wind.innerHTML = data.wind.speed + "Km/Hr";
      if(data.weather[0].main == "Clouds"){
        image.src = "./images/cloudy-night-1.svg";
      }
      else if(data.weather[0].main == "Rain"){
         image.src = "./images/rainy-7.svg";
      }
      else if(data.weather[0].main == "Clear")
        image.src = "day.svg";
    
      card.style = "height : 500px;transition:height 0.5s"
weatherstatus.style= "display : block"
}
}
btn.addEventListener("click",() =>{
  checkweather(search.value)
}
)
