
const key='yfyKEA11Aj3Ru9lEn9GDVOEoIkYViDOH';
//get city weather

const getWeather = async(code)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${code}?apikey=${key}`;
    const response =await fetch(base+query);
    const data = await response.json();
    return data[0];
}

//get City information
const getCity = async (city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    const response =await fetch(base+query);
    const data = await response.json();
    // console.log(data[0]);
    return data[0];
}
// getCity('mumbai')
//     .then(data => {return getWeather(data.Key)})
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Using OOP on here

class Forecast{
    constructor(){

        this.key='yfyKEA11Aj3Ru9lEn9GDVOEoIkYViDOH';
        this.cityURI='http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURI='http://dataservice.accuweather.com/currentconditions/v1/';
    }
    getCity = async (city)=>{
        // const base='http://dataservice.accuweather.com/locations/v1/cities/search';
        const query=`?apikey=${this.key}&q=${city}`;
        const response =await fetch(this.cityURI+query);
        const data = await response.json();
        // console.log(data[0]);
        return data[0];
    }
    getWeather = async(code)=>{
        // const base='http://dataservice.accuweather.com/currentconditions/v1/';
        const query=`${code}?apikey=${this.key}`;
        const response =await fetch(this.weatherURI+query);
        const data = await response.json();
        return data[0];
    }

};