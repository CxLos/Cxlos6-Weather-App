//////////////////////////// Variables ///////////////////////////
// URL's API Key
var apiKey = "ca9ea4f898c4e91a2941e8e7024667b9";
var wUrl5 = "https://api.openweathermap.org/data/2.5/forecast?q=&units=imperial&appid="
var wUrl1 = 'https://api.openweathermap.org/data/2.5/weather?q=&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9'
let wUrl4 = "https://cxlos.github.io/Cxlos6-Weather-App/"
var conditions = "http://openweathermap.org/img/wn/"
// var lat = document.querySelector('latitude').value;
// var lon = document.querySelector('longititude').value;

// Query Selectors
var input1 = document.querySelector('#city-input');
var cSearch = document.querySelector('#city-search')
let weather = document.querySelector('#display');
const history3 = document.querySelector('.history3');
const input2 = document.querySelector('input[name="city-input"]');
const cityName1 = document.querySelector('#city-name');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var hum = document.querySelector('#hum');
var citty = document.querySelector('#city');
var hi = document.querySelector('#hi');
var lo = document.querySelector('#lo');
var cloud = document.querySelector('#cloud');
var condition = document.querySelector('#condition');
/////// 5-Day Forecast /////////
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
/////// Empty Array ////////////
var x = [];
// let entries = JSON.parse(localStorage.setItem("Recorded Cities")) ||[];
// var ny = [40.7143, -74.006];
// var austin = [30.2672, -97.7431];
// var history2 = document.querySelector('.history2');
// const [data,setData] = useState({})
// const [location, setLocation] = useState('')
// var holder = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};
/////////////// FetchUrl ////////////////////

// fetch(wUrl5)

// fetch ('https://api.openweathermap.org/data/2.5/weather?q=london&appid=ca9ea4f898c4e91a2941e8e7024667b9')

//     .then(response => response.JSON())
//     .then(data => console.log(data))

// .catch(err => alert("Wrong"))

// practice
// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'user 1'
//     })
// })
//     .then(res => {
//         if (res.ok) {
//             console.log('success')
//     } else {
//         console.log('not successful')
//     }
//     })

//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))

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

    console.log(data);
    // console.log(apiKey);
      // var nameValue = data['main']['name'];
    // var tempValue = data['main']['temp'];
    // var humValue = data['main']['humidity'];
    // var windValue = data['wind'];
})
}

function getWeather1 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        f1.textContent = data.list[0].sys.dt_txt
        hi1.textContent = "High: " + data.list[0].main.temp + '°'
        lo1.textContent = "Low: " + data.list[0].main.temp + '°'
        g1.src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png"

    console.log(data);
})
}

function getWeather2 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        hi2.textContent = "High: " + data.list[1].main.temp + '°'
        lo2.textContent = "Low: " + data.list[1].main.temp + '°'
        g2.src = "http://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png"

})
}

function getWeather3 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        hi3.textContent = "High: " + data.list[2].main.temp + '°'
        lo3.textContent = "Low: " + data.list[2].main.temp + '°'
        g3.src = "http://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png"

})
}

function getWeather4 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        hi4.textContent = "High: " + data.list[3].main.temp + '°'
        lo4.textContent = "Low: " + data.list[3].main.temp + '°'
        g4.src = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png"

})
}

function getWeather5 () {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input1.value+'&units=imperial&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => {

        hi5.textContent = "High: " + data.list[4].main.temp + '°'
        lo5.textContent = "Low: " + data.list[4].main.temp + '°'
        g5.src = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png"

})
}

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

////////////// Appenidng cities /////////

// function addHistory (e) {
//     e.preventDefault();
//     var list = document.createElement('li');
//     // var list2 = document.createElement('h2');
//     if (input1.value == "") {
//         alert("Please enter a city")    
//     }
    
//     else if (input1.value != "") {
//         list.classList.add('history2');
//         list.innerHTML = input1.value;
//         history3.appendChild(list);
//         input1.value = "";
    
//         console.log(input1.value);
//     }

// } 

/////////////// Local Storage /////////////////////

// function init () {

//     var storedr = JSON.parse(localStorage.getItem("Recorded Cities"));

//     if (storedr !== null) {
//         entries = storedr;
//     }
// }

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

// function getLocal () {

//     var y = localStorage.getItem("City Name")
//     document.querySelector('.history3').append(localStorage.getItem(JSON.parse (y)));
// }


///////////// Displaying City Name ////////////////

function displayCity (e) {
    e.preventDefault();
    var list2 = document.createElement('h2');
    
    if (input1.value != "") {
        list2.classList.add('city');
        list2.innerHTML = input1.value;
        cityName1.appendChild(list2);
    
        console.log(input1.value);
    }
}

// init();
////////////// Event Listener ////////////////
var sWeather = document.querySelector('#sbutton');

sWeather.addEventListener('click', getWeather);
sWeather.addEventListener('click', getWeather1);
sWeather.addEventListener('click', getWeather2);
sWeather.addEventListener('click', getWeather3);
sWeather.addEventListener('click', getWeather4);
sWeather.addEventListener('click', getWeather5);
// sWeather.addEventListener('click', addHistory);
// sWeather.addEventListener('click', displayCity);
sWeather.addEventListener('click', storeCity);

////////////////////////////////////////////////////////////////////////////

// 1. cant 