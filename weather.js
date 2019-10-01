/**Gets weather data and inserts it into the webpage.
 * 
 * API Key: d214c5fcf05f3b01634b585077751866
 * API: https://darksky.net/dev
 * 
 * Darksky was chosen because it offers free historical data.
 * 
 * Depends:
 * Jquery - "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
 */
function logger(data) {
    console.log(data)
}

/**Gets the current weather from the API and writes that info to a div.
* 
* @param {number} latitude      Latitude of the location to retrieve weather for.
* @param {number} longitude     Longitude of the location to retrieve weather for.
*/
function getWeather(latitude, longitude) {
    $.ajax({
        type:"GET",
        url:`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/[key]/${latitude},${longitude}`, //No Key, insert as needed
        dataType:"JSON",
        success: (response) => {
            writeToDiv("#tempContainer", createWeatherDiv(response));
        },
        error: (response, errString) => {
            writeToDiv("#tempContainer", "Could not retrieve weather!");
        }
    })
}

/**Creates a Div containing weather information.
 * 
 * @param {object} weatherApiObject     The object returned by Dark Sky weather API.
 */
function createWeatherDiv(weatherApiObject) {
    let weatherIconPicker = () => {
        switch (todaysWeather.icon) {
            case "clear-day":
                return "./images/weather/001-sun.svg";
            case "clear-night":
                return "./images/weather/002-moon.svg";
            case "rain":
                return "./images/weather/030-rain.svg";
            case "snow":
                return "./images/weather/035-snow.svg";
            case "sleet":
                return "./images/weather/035-snow.svg";
            case "wind":
                return "./images/weather/007-wind.svg";
            case "fog":
                return "./images/weather/006-fog.svg";
            case "cloudy":
                return "./images/weather/005-cloud.svg";
            case "partly-cloudy-day":
                return "./images/weather/012-day.svg";
            case "party-cloudy-night":
                return "./images/weather/011-night.svg";
            default:
                return "./images/weather/012-day.svg";
        }
    }

    let todaysWeather = weatherApiObject.daily.data[0]
    let newDiv = $("<div/>");
    let newImg = $("<img/>");
    let summaryDiv = $("<div/>").text(todaysWeather.summary);   
    
    let precipList = $("<ul/>");
    precipList.append($("<li/>").text(todaysWeather.precipType), $("<li/>").text(todaysWeather.precipProbability));
    
    let tempList = $("<ul/>");
    tempList.append($("<li/>").text(`High: ${todaysWeather.apparentTemperatureHigh}`), $("<li/>").text(`Low: ${todaysWeather.apparentTemperatureLow}`))

    newImg.attr({
        id: "weather-icon",
        href: weatherIconPicker(),
        width: "40px",
        height: "40px"
    })
    return newDiv.append(newImg, summaryDiv, precipList, tempList);
}

/**Appends an Element or Text to a div.
 * 
 * @param {string} divID                                        The ID of an element to write to.
 * @param {(object|string)} [element="Nothing to write!"]       An element or string to write to a div or other element.
 */
function writeToDiv(divID, element="Nothing to write!") {
    $(divID).append(element)
}

$(document).ready(() => {
    getWeather(29.795662,-95.5676639)
})


