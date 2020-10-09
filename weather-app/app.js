const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=token1&query=37.8267,-122.4233&units=f';

request({ url: url, json: true},(error, response)=>{
if(error){
    console.log('unable to connect to weather service')
 } else if (response.body.error){
 console.log('unable to find location')

 }

else{
    console.log(response.body.current.weather_descriptions[0]+" "+" current temperature "+
    response.body.current.temperature +" feels like " +response.body.current.feelslike)
}

})


const mapUrl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/12waht?access_token=token2&limit=1'
request({url:mapUrl, json:true},(error, response)=>{
 
 console.log(response.body)
if(error){
    console.log("some problem with map service")
} else if(!response.body.features){
console.log("No matching results")
}   else {
    const longitude = 
    response.body.features[0].center[0]

    const latitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
}

   // console.log(response.body.features[0].center)
   
})