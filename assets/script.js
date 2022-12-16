//////////////////////////// Variables ///////////////////////////
var wUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=${}&lon=${}&appid=${}"
var apiKey = "ca9ea4f898c4e91a2941e8e7024667b9";
// var lat = document.querySelector('latitude').value;
// var lon = document.querySelector('longititude').value;
var input1 = document.querySelector('#city-input');
let weather = document.querySelector('#display');
const history3 = document.querySelector('.history3');
const input2 = document.querySelector('input[name="city-input"]');
const cityName1 = document.querySelector('#city-name');
// var ny = [40.7143, -74.006];
// var austin = [30.2672, -97.7431];
// var history2 = document.querySelector('.history2');
// const [data,setData] = useState({})
// const [location, setLocation] = useState('')
// var holder = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};

/////////////// Functions ////////////////////
// fetch(wUrl)

function getWeather () {
   
    console.log(apiKey);
    // weather.innerHTML = '';
    // weather.innerHTML = resp.daily.map(day => {
    //     return <p>Day</p>
    // }).join('');
}

////////////// Appenidng cities /////////

function addHistory (e) {
    e.preventDefault();
    var list = document.createElement('li');
    var list2 = document.createElement('h2');
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

////////////// Event Listener ////////////////
var sWeather = document.querySelector('#sbutton');

sWeather.addEventListener('click', getWeather);
sWeather.addEventListener('click', addHistory);
sWeather.addEventListener('click', displayCity);
////////////////////////////////////////////////////////////////////////////

// if (input1.value == "") {
//     alert("Please enter a city")
    
// }
// return;