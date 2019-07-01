/*****Weather Summary*****/

let weatherRequest = new XMLHttpRequest();
let apiURLstring1 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ff571c48af1923ac4fbdf7523b913171';
weatherRequest.open('Get', apiURLstring1, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById('currenttemp').innerHTML = weatherData.main.temp.toFixed(1);
    document.getElementById('hightemp').innerHTML = weatherData.main.temp_max.toFixed(1);
    document.getElementById('windchill').innerHTML = windChill(weatherData.main.temp_max, weatherData.wind.speed).toFixed(1);
    document.getElementById('humidity').innerHTML= weatherData.main.humidity.toFixed(0);
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed.toFixed(1);
}

/*****Forecast*****/

let weatherTemps = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=ff571c48af1923ac4fbdf7523b913171';
weatherTemps.open('Get', apiURLstring2, true);
weatherTemps.send();

weatherTemps.onload = function() {
    let weatherForecast = JSON.parse(weatherTemps.responseText);
    let tempforecast = [];
    let tempicon = [];
    let desc = [];
    let day = 1;

    weatherForecast.list.forEach(hour => {
        if (hour.dt_txt.includes('18:00:00')) {
            tempforecast[day] = hour.main.temp;
            tempicon[day] = "http://openweathermap.org/img/w/" + hour.weather[0].icon + ".png";
            desc[day] = hour.weather[0].description;
            day++;
        }

    });

    let weekday = new Date();
    let names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 1; i <= 5; i++) {
        document.getElementById('forecast' + i).innerHTML = tempforecast[i].toFixed() + "&deg; F";
        document.getElementById('icon' + i).setAttribute('src', tempicon[i]);
        document.getElementById('icon' + i).setAttribute('alt', desc[i]);
        document.getElementById('weekday' + i).innerHTML = names[(weekday.getDay() + i) % 7]; 
    } 
}