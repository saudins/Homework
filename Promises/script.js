console.log("Connected!");

class Provider {  
      /** 
       * Gets the weather for a given city 
       */  
      static getWeather(city) {  
        return Promise.resolve(`The weather of ${city} is Cloudy`)  
      };  
      /** 
       * Gets the weather for a given city 
       */  
      static getLocalCurrency(city) {  
        return Promise.resolve(`The local currency of ${city} is GBP`)  
      };  
      /** 
       * Given Longtitude and latitude, this function returns a city 
       */  
      static findCity(long, lat) {  
        return Promise.resolve(`London`)  
      };  
    };  

    
// Print the city for lat/long 51.5074 and 0.1278
const city = Provider.findCity(51.5074, 0.1278);
console.log(city);
// Print the weather for a given long / lan
console.log(city
.then(Provider.getWeather));
// Print the weather and currency for a given city (London)
console.log(city
.then(Provider.getWeather) , city.then(Provider.getLocalCurrency));