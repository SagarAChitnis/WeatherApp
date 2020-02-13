
const request = require("request")
const dotenv = require("dotenv").config()
var address = process.argv[2]

var city = address.split(",")[0]
var country = address.split(",")[1]


if(!city || !country){
    return console.log("Enter the city and country ISO name. Eg: London,uk")
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`

request( url, (error, response, body) => {
    const data = JSON.parse(body)
    console.log("The current temperature is " + data.main.temp + " degree Celsius")
}) 