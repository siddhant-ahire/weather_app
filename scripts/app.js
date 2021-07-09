const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const forecast = new Forecast();
const updateUI = async (data)=>{
    // //Normal way of declaring..
    // const cityDets = data.cityDets;
    // const weatherDets = data.weatherDets;

    //destructure properties..
    const {cityDets,weatherDets}=data;
    
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weatherDets.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherDets.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    //update night/day and icon images..
    const iconSrc=`img/icons/${weatherDets.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);
    let imgSrc=null;
    if (weatherDets.IsDayTime){
        imgSrc = "img/day.svg";
        console.log('yes');
    }else{
        imgSrc = "img/night.svg";
        console.log('no');
    }
    console.log(imgSrc);
    time.setAttribute('src',imgSrc);
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};
// get data of city
const updateCity = async (city) =>{
    const cityDets = await forecast.getCity(city);
    const weatherDets = await forecast.getWeather(cityDets.Key);
    return{cityDets,weatherDets};
};



cityForm.addEventListener('submit',e =>{
    //prevent Default Action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city)
    .then(data => updateUI(data));
    localStorage.setItem('city',city);

});

if (localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data));    
} else {
    
}
