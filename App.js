const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode("Jaipur", (error, data) => {
    console.log("Error: ", error)
    console.log("Data: ", data)
})

forecast(26.915458, 75.818982, (error, data) => {
    console.log("Error: ", error)
    console.log("Data: ", data)
})
