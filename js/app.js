const API_KIY = `814ad4d80b0af148be64259fcb539977`;
const loadTemperature = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KIY}&units=metric`)
    .then(res => res.json())
    .then(data => displayTemperature(data) )
    
}

const cityName = city =>{
    const input = document.getElementById('input-city');
    city = input.value;
    loadTemperature(city)
    
}

const displayTemperature = data =>{
    console.log(data)
    const city = document.getElementById('city-name')
    const temp = document.getElementById('trampracher');
    const wher = document.getElementById('wathaer');
    temp.innerText = data.main.temp;
    city.innerText = data.name;
    wher.innerText = data.weather[0].description;

} 

loadTemperature()     