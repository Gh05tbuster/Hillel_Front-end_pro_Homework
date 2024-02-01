const cities = ['Kyiv', 'Lviv', 'Dnipro', 'Kharkiv', 'Odesa', 'Kherson'];
const citySelect = document.querySelector('.citySelect');
const weatherBlock = document.querySelector('.weatherBlock');
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
        .catch((e) => weatherBlock.innerHTML = e);
}

function printWeather(weatherData) {
    const city = weatherData.name;
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const currTemp = weatherData.main.temp;
    const minTemp = weatherData.main.temp_min;
    const maxTemp = weatherData.main.temp_max;
    const pressure = weatherData.main.pressure;
    const humidity = weatherData.main.humidity
    const windSpeed = weatherData.wind.speed;
    const windDirection = weatherData.wind.deg;

    const date = getCurrentDate();

    weatherBlock.innerHTML = `
    <div class="weather">
    <div class="leftSide">
        <div> 
            <img src="http://openweathermap.org/img/w/${icon}.png" alt="">
            <p class="description">${description}</p>
        </div>
        <div>
            <p class="text">${city}</p>
            <p class="text">${date.day} ${date.date} ${date.month}</p>
        </div>
    </div>
    <div class="rightSide">
        <div class="temp">
            <p class="temperature">${Math.round(currTemp)}°C</p>
        </div>
        <div class="minTemp">
            <img src="./img/arrow_down_icon.svg" alt="min temperature">
            <p class="temperature">${Math.round(minTemp)}°C</p>
        </div>
        <div class="maxTemp">
            <img src="./img/arrow_up_icon.svg" alt="max temperature">
            <p class="temperature">${Math.round(maxTemp)}°C</p>
        </div>
        <div class="pressure">
            <img src="./img/air_pressure_icon.svg" alt="air pressure">
            <p class="text">${pressure} hPa</p>
        </div>
        <div class="humidity">
            <img src="./img/humidity_icon.svg" alt="humidity">
            <p class="text">${humidity}%</p>
        </div>
        <div class="wind">
            <img src="./img/double_arrow_down_icon.svg" alt="" style="rotate: ${windDirection}deg">
            <p class="text">${windSpeed} m/s</p>
        </div>
    </div>
</div>`;
}

function getCurrentDate() {
    const dateObj = {};
    const currDate = new Date();

    dateObj.date = currDate.getDate();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayIndex = currDate.getDay();
    dateObj.day = daysOfWeek[dayIndex];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = currDate.getMonth();
    dateObj.month = months[monthIndex];

    return dateObj;
}