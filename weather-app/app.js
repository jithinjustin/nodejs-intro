const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=token1&query=37.8267,-122.4233&units=f';

request({ url: url, json: true},(error, response)=>{
console.log(response.body.current.weather_descriptions[0]+" "+
    response.body.current.temperature)


})

const mapUrl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=token2&limit=1'
request({url:mapUrl, json:true},(error, response)=>{
 
 
   // console.log(response.body.features[0].center)
   const longitude = response.body.features[0].center[0]

   const latitude = response.body.features[0].center[1]
   console.log(latitude, longitude)
})