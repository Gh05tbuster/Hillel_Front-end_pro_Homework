// window.onload = function () {
//     const citySelect = document.querySelector('.citySelect');
//     cities.forEach(city => {
//         citySelect.innerHTML += `
//         <button class="btn city" id="${city}">${city}</button>`;
//     });
// }

const cities = ['Kyiv', 'Lviv', 'Dnipro', 'Kharkiv', 'Odesa', 'Kherson'];
const citySelect = document.querySelector('.citySelect');
const weather = document.querySelector('.weather');
cities.forEach(city => {
    citySelect.innerHTML += `
    <button class="btn city" id="${city}">${city}</button>`;
});

citySelect.addEventListener('click', showWeather);

function showWeather(event) {
    if (event.target.tagName !== 'BUTTON') return;
    const sw = new Promise(async (resolve, reject) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.id}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
        if (!response.ok)
            reject('<h2 class="title h2">Something went wrong 😕</h2)');
        else resolve(response);
    });

    sw.then((response) => response.json())
        .then((json) => printWeather(json))
        .catch((e) => weather.innerHTML = e);
}

function printWeather(weatherData) {
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const currTemp = weatherData.main.temp;
    const minTemp = weatherData.main.temp_min;
    const maxTemp = weatherData.main.temp_max;
    const pressure = weatherData.main.pressure;
    const humidity = weatherData.main.humidity
    const windSpeed = weatherData.wind.speed;
    const windDirection = weatherData.wind.deg;

    weather.innerHTML = `
    <p>description: ${description}</p>
    <img src='http://openweathermap.org/img/w/${icon}.png'>
    <p>Temp: ${Math.round(currTemp)}°C</p>
    <p>minTemp: ${Math.round(minTemp)}°C</p>
    <p>maxTemp: ${Math.round(maxTemp)}°C</p>
    <p>pressure:${pressure}</p>
    <p>humidity: ${humidity}%</p>
    <p>windSpeed: ${windSpeed} m/s</p>
    <p>windDirection: ${windDirection}</p>
    `;

    //todo:
    //? temp max&min icons instead of words
    //? pressure icon
    //? humidity icon
    //? wind icons #A7BCDB
    //! description: no icon
    //! temp: no icon
}

// {"coord":{"lon":30.5167,"lat":50.4333},
//? "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
// "base":"stations",
//? "main":{"temp":2.5,"feels_like":-1.16,"temp_min":-1.35,"temp_max":3.18,"pressure":1026,"humidity":83},
// "visibility":10000,
//? "wind":{"speed":3.92,"deg":255,"gust":10.84},
// "clouds":{"all":100},
// "dt":1706725964,
// "sys":{"type":2,"id":2003742,"country":"UA","sunrise":1706679322,
// "sunset":1706712420},
// "timezone":7200,
// "id":703448,
// "name":"Kyiv",
// "cod":200}