const request = require("request")
const geocode = require('./utils/geocode')

geocode('toronto',(error,data)=>{
console.log('error',error)
console.log('Data',data)

})