//////////////////////////// Variables ///////////////////////////
// URL's API Key
var wUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=${}&lon=${}&appid=${}"
var wUrl2 = "https://api.openweathermap.org/data/2.5/weather?q=${}&appid=${}"
var wUrl3 = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=ca9ea4f898c4e91a2941e8e7024667b9'
let wUrl4 = "https://cxlos.github.io/Cxlos6-Weather-App/"
var apiKey = "ca9ea4f898c4e91a2941e8e7024667b9";
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
// IDK
let entries = JSON.parse(localStorage.getItem("Recorded Cities")) ||[];
// var ny = [40.7143, -74.006];
// var austin = [30.2672, -97.7431];
// var history2 = document.querySelector('.history2');
// const [data,setData] = useState({})
// const [location, setLocation] = useState('')
// var holder = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};

/////////////// FetchUrl ////////////////////

fetch(wUrl3)

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
   
    console.log(apiKey);

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input1.value+'&appid=ca9ea4f898c4e91a2941e8e7024667b9')

    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {

    var nameValue = data['main']['name'];
    var tempValue = data['main']['temp'];
    var humValue = data['main']['humidity'];
    var windValue = data['wind'];

    citty = nameValue.innerHTML
    temp = tempValue.innerHTML
    hum = humValue.innerHTML
    wind = windValue.innerHTML
})
// .catch(err => alert("Wrong"))

    // weather.innerHTML = '';
    // weather.innerHTML = resp.daily.map(day => {
    //     return <p>Day</p>
    // }).join('');
}

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
    localStorage.setItem("Recorded Cities", JSON.stringify(rcity));
    // entries.push(rcity);
    console.log(JSON.stringify(rcity));

    /////////// Appending Cities //////////////
    var list = document.createElement('li');
    // var list2 = document.createElement('h2');
    if (input1.value == "") {
        alert("Please enter a city")    
    }
    
    else if (input1.value != "") {
        list.classList.add('history2');
        list.innerHTML = input1.value;
        history3.appendChild(list);
        input1.value = "";
    
        console.log(input1.value);
    }
}

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
// sWeather.addEventListener('click', addHistory);
// sWeather.addEventListener('click', displayCity);
sWeather.addEventListener('click', storeCity);

////////////////////////////////////////////////////////////////////////////

// 1. cant 