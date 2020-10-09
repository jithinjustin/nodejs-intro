
const request = require('request')
const forecast = (latitude, longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=token1&query='+latitude+','+longitude+'&units=f';
   console.log(url)
    request({ url: url, json: true},(error, response)=>{
        if(error){
            callback('unable to connect to weather service')
         } else if (response.body.error){
           callback('unable to find location in weather service')
        
         }
        else{
            callback(undefined,"weather description "+response.body.current.weather_descriptions[0]+" "+" current temperature "+
            response.body.current.temperature +" feels like " +response.body.current.feelslike)
        }
        
    })
}

module.exports = forecast