const search = document.querySelector('.search-box button');

var d = new Date(); // yyyy-mm-dd
var date = d.getDate();
var month = d.toLocaleString('default', { month: 'short' });
var year = d.getFullYear();
var dateres = date + ' ' + month + ' ' + year;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dayname = weekday[d.getDay()];
datemy.innerHTML= dateres;
dname.innerHTML= dayname;

const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
const city = document.querySelector('.search-box input').value;


    search.addEventListener('click', () => {

        const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
        const city = document.querySelector('.search-box input').value;
    
        if (city === '')
            return;
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => {
    
                if (json.cod === '404') {
    
                    temp.innerHTML = "Invalid";
                    desc.innerHTML = "Invalid";
    
                    return;
    
                }
                const location = document.querySelector('.location');
                const country = document.querySelector('.country');
                const image = document.querySelector('.containw img');
                const temp = document.querySelector('.temp');
                const desc = document.querySelector('.desc');
                const humidity = document.querySelector('.humidity');
                const wind = document.querySelector('.wind');
                const feelslike = document.querySelector('.feelslike');
                const wdeg = document.querySelector('.wdeg');
                const mintemp = document.querySelector('.mintemp');
                const maxtemp = document.querySelector('.maxtemp');
                const pressure = document.querySelector('.pressure');

                switch (json.weather[0].main) {
                    case 'Clear':
                        image.src = 'images/clear.png';
                        break;
    
                    case 'Rain':
                        image.src = 'images/rain.png';
                        break;
    
                    case 'Snow':
                        image.src = 'images/snow.png';
                        break;
    
                    case 'Clouds':
                        image.src = 'images/cloud.png';
                        break;
    
                    case 'Haze':
                        image.src = 'images/mist.png';
                        break;
    
                    default:
                        image.src = '';
                }
                location.innerHTML = `${json.name}`
                country.innerHTML = `${json.sys.country}`;
                temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                desc.innerHTML = `${json.weather[0].description}`;
                humidity.innerHTML = `${json.main.humidity} %`;
                wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
                feelslike.innerHTML = `${parseInt(json.main.feels_like)}<span>°C</span>`;
                wdeg.innerHTML = `${parseInt(json.wind.deg)}<span>°</span>`;
                mintemp.innerHTML = `${parseInt(json.main.temp_min)}<span>°C</span>`;
                maxtemp.innerHTML = `${parseInt(json.main.temp_max)}<span>°C</span>`;
                pressure.innerHTML = `${parseInt(json.main.pressure)}<span> hPa</span>`;

                console.log(json);
                
    
            });
    
    });