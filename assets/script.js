//////////////////////////// Variables ///////////////////////////
// URL's & API Key
var apiKey = "ca9ea4f898c4e91a2941e8e7024667b9";
var wUrl5 = "https://api.openweathermap.org/data/2.5/forecast?q=&units=imperial&appid="
var conditions = "http://openweathermap.org/img/wn/"

//////////////////// Query Selectors ////////////////////
var input1 = document.querySelector('#city-input');
var cSearch = document.querySelector('#city-search')
let weather = document.querySelector('#display');
const history3 = document.querySelector('.history3');
const input2 = document.querySelector('input[name="city-input"]');
const cityName1 = document.querySelector('#city-name');
var today = document.querySelector('#today');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var hum = document.querySelector('#hum');
var citty = document.querySelector('#city');
var hi = document.querySelector('#hi');
var lo = document.querySelector('#lo');
var cloud = document.querySelector('#cloud');
var condition = document.querySelector('#condition');
const d = dayjs().format('dddd, MMMM D');

//////////////// 5-Day Forecast ////////////////
var hi1 = document.querySelector('#hi1');
var hi = document.querySelector('#hi');
var hi = document.querySelector('#hi');
var hi = document.querySelector('#hi');
var hi = document.querySelector('#hi');
///////////////////////////////////////////
var lo1 = document.querySelector('#lo1');
var lo2 = document.querySelector('#lo2');
var lo3 = document.querySelector('#lo3');
var lo4 = document.querySelector('#lo4');
var lo5 = document.querySelector('#lo5');
///////////////////////////////////////////
var g1 = document.querySelector('#g1');
var g2 = document.querySelector('#g2');
var g3 = document.querySelector('#g3');
var g4 = document.querySelector('#g4');
var g5 = document.querySelector('#g5');
///////////////////////////////////////////
var f1 = document.querySelector('.f1');
var f2 = document.querySelector('.f2');
var f3 = document.querySelector('.f3');
var f4 = document.querySelector('.f4');
var f5 = document.querySelector('.f5');
///////////////////////////////////////////
var u1 = document.querySelector('#u1');
var u2 = document.querySelector('#u2');
var u3 = document.querySelector('#u3');
var u4 = document.querySelector('#u4');
var u5 = document.querySelector('#u5');
////////////// Empty Array ///////////////

var x = [];

console.log(d);

/////////////// Getting Weather ////////////////////

function getWeather () {

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

    citty.textContent = data.name
    temp.textContent = 'Current Temperature: ' + data.main.temp + '°'
    hi.textContent = 'High: ' + data.main.temp_max + '°'
    lo.textContent = 'Low: ' + data.main.temp_min + '°'
    cloud.textContent = 'Cloud Coverage: ' + data.clouds.all + '%'
    wind.textContent = 'Wind: ' + data.wind.speed + ' mph'
    hum.textContent = 'Humidity: ' + data.main.humidity + '%'
    condition.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"

    today.textContent = d

    console.log(data);
})
}

function getWeather1 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        f1.textContent = data.list[0].dt_txt
        hi1.textContent = "High: " + data.list[0].main.temp + '°'
        lo1.textContent = "Low: " + data.list[0].main.temp + '°'
        u1.textContent = "Humidity: " + data.list[0].main.humidity + "%"
        g1.src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png"

    console.log(data);
})
}

function getWeather2 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        f2.textContent = data.list[1].dt_txt
        hi2.textContent = "High: " + data.list[1].main.temp + '°'
        lo2.textContent = "Low: " + data.list[1].main.temp + '°'
        u2.textContent = "Humidity: " + data.list[1].main.humidity + "%"
        g2.src = "http://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png"
})
}

function getWeather3 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        f3.textContent = data.list[2].dt_txt
        hi3.textContent = "High: " + data.list[2].main.temp + '°'
        lo3.textContent = "Low: " + data.list[2].main.temp + '°'
        u3.textContent = "Humidity: " + data.list[2].main.humidity + "%"
        g3.src = "http://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png"
})
}

function getWeather4 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        f4.textContent = data.list[3].dt_txt
        hi4.textContent = "High: " + data.list[3].main.temp + '°'
        lo4.textContent = "Low: " + data.list[3].main.temp + '°'
        u4.textContent = "Humidity: " + data.list[3].main.humidity + "%"
        g4.src = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png"
})
}

function getWeather5 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        f5.textContent = data.list[4].dt_txt
        hi5.textContent = "High: " + data.list[4].main.temp + '°'
        lo5.textContent = "Low: " + data.list[4].main.temp + '°'
        u5.textContent = "Humidity: " + data.list[4].main.humidity + "%"
        g5.src = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png"
})
}

//////////////////////// Local Storage & Appending //////////////////////

function storeCity (event) {
    event.preventDefault();

    let rcity = input1.value.trim();
    // entries.push(rcity);
    // localStorage.setItem("Recorded Cities", JSON.stringify(rcity));
    x.push(rcity);
    localStorage.setItem("City Name", JSON.stringify(x));
    console.log(x);

    /////////// Appending Cities //////////////
    var list = document.createElement('li');
    // var list2 = document.createElement('h2');
    if (input1.value == "") {
        alert("Please enter a city")    
    }
    
    else if (input1.value != "") {
        list.innerHTML = input1.value;
        list.classList.add('history2');
        history3.appendChild(list);
        input1.value = "";
    
        console.log(input1.value);
    }
}
///////////////////////// Attempted for loop ////////////////////////

// function getweatherFor () {
//     fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

//     .then(response => response.json())
//     .then(data => {

//         for(i=0; i < 5; i++) {
//             document.getElementById("Min" +(i+1)+"hi9").textContent = "Min: " + Number(data.list[i].main.temp_min).toFixed(1)+"°"
//         }

//         for(i=0; i < 5; i++) {
//             document.getElementById("day" +(i+1)+"Max").textContent = "Max: " + Number(data.list[i].main.temp_max).toFixed(1)+"°"
//         }

//         for(i=0; i < 5; i++) {
//             document.getElementById("g1" +(i+1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png"
//         }

//         // temp.textContent = 'Current Temperature: ' + data.main.temp + '°'
//         // hi1.textContent = data.list[0].main.temp 

//         console.log(data);
//     })
// // .catch(err => alert("Uh Oh!"))
    
// } 

///////////////////// Event Listener /////////////////////
var sWeather = document.querySelector('#sbutton');

sWeather.addEventListener('click', getWeather);
sWeather.addEventListener('click', getWeather1);
sWeather.addEventListener('click', getWeather2);
sWeather.addEventListener('click', getWeather3);
sWeather.addEventListener('click', getWeather4);
sWeather.addEventListener('click', getWeather5);
sWeather.addEventListener('click', storeCity);
////////////////////////////////////////////////////////////////////////////
