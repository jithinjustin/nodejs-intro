const request = require("request")
const forecast = require("./utils/forecast")
const geocode = require('./utils/geocode')

geocode('toronto',(error,data)=>{
console.log('error',error)
console.log('Data',data)

})

forecast(37.8267,-122.4233,(error,data)=>{
    console.log('error',error)
console.log('Data',data)
})