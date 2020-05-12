const api = {
	key: "afaf9f8d48cff6cafd32e23220bcfdbf",
	baseurl:"https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress' , setQuery);

function setQuery(evt) {
	if (evt.keyCode==13) {
		getResults(searchbox.value);
		console.log(searchbox.value);
	}
}

function getResults(query) {
	fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
		.then(weather => {
			return weather.json();
		}).then(displayResults);
}

function displayResults(weather) {
	console.log(weather);
	let city=document.querySelector('.location .city');
	city.innerText = '${weather.name},${weather.sys.country}';

	let now=new Date();
	let date = document.querySelector('.location.date');
	date.innerText=dateBuilder(now);

	let temp = document.querySelector('.current .temp');
	temp.innerHTML = '${Math.round(weather.main.temp)}<span>`c</sapn>';

	let weather_el = document.querySelector('.current .weather');
	weather_el.innerText = weather.weather[0].main;

	let hilow = document.querySelector('.hi-low');
	hilow.innerText = '${Math.round(weather.main.temp_min)}`c / ${Math.round(weather.main.temp_max)}`c ;'

}

function dateBuilder(d) {
	let months = ["january" , "february" , "march" , "april" , "may" , "june" , "july" , "august" , "september" , "october" , "november" ,  "december"];
	
	let days = ["sunday" , "monday" , "teusday" , "wednesday" , "thursday" , "friday" , "saturday"];

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getmonths()];
	let year = d.getFullYear();

	return '${day} ${date} ${months} ${year}' ;
}







