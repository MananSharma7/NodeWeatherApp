const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=fbbba6628b8421832da71377c550431a&query=${latitude},${longitude}&units=m`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to location services!", undefined)
        } else if (response.body.error) {
            callback("Unable to find location!", undefined)
        } else {
            const temp = response.body.current.temperature
            const rain = response.body.current.precip
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It's currently ${temp} degrees out. There is a ${rain}% chance of rain.`)
        }
    })
}

module.exports = forecast