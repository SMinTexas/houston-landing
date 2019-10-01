/**Gets weather historical weather data and inserts it into the webpage.
 * 
 * API Key: d214c5fcf05f3b01634b585077751866
 * API: https://darksky.net/dev
 * 
 * Darksky was chosen because it offers free historical data.
 * 
 * Depends:
 * Jquery - "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
 */
    // var weatherRetrievalPromise = new Promise((resolve, reject) => {
    //     $.ajax({
    //         type:"GET",
    //         url:"https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/[key]/29.795662,-95.5676639", //No Key, insert as needed
    //         dataType:"JSON",
    //         success: (response) => {
    //             resolve([response]);
    //         },
    //         error: (response, errString) => {
    //             reject([response, errString]);
    //         }
    //     })
    // })

    function logger(data) {
        console.log(data)
    }
    
    
    /**
    * 
    * @param {*} latitude 
    * @param {*} longitude 
    * @param {number} time     Time code in Unix format
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
                writeToDiv("#tempContainer", "Could not retrieve Weather");
            }
        })
    }

    function createWeatherDiv(weatherApiObject) {
        // A machine-readable text summary of this data point, suitable for selecting an icon for display. If defined, this property will have one of the following values: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night. (Developers should ensure that a sensible default is defined, as additional values, such as hail, thunderstorm, or tornado, may be defined in the future.)
        let todaysWeather = weatherApiObject.daily.data[0]
        let newDiv = $("<div/>");;
        let newImg = $("<img/>").attr("href", () => {
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
        })

        let summaryDiv = $("<div/>").text(todaysWeather.summary);
        console.log(weatherApiObject)
        let precipList = $("<ul/>");
        precipList.append($("<li/>").text(todaysWeather.precipType));
        precipList.append($("<li/>").text(todaysWeather.precipProbability));
        let tempList = $("<ul/>");
        tempList.append($("<li/>").text(`High: ${todaysWeather.apparentTemperatureHigh}`))
        tempList.append($("<li/>").text(`Low: ${todaysWeather.apparentTemperatureLow}`))


        newImg.attr("id", "weather-icon");
        newImg.attr("width", "40px");
        newImg.attr("height", "40px");
        newDiv.append(newImg);
        newDiv.append(summaryDiv);
        newDiv.append(precipList);
        newDiv.append(tempList)

        return newDiv;

    }

    /**Appends an Element or Text to a div.
     * 
     * @param {string} divID                                        The ID of an element to write to.
     * @param {(object|string)} [element="Nothing to write!"]       An element or string to write to a div or other element.
     */
    function writeToDiv(divID, element="Nothing to write!") {
        $(divID).append(element)
    }
   
       ///retrieveWeatherPromise.then(response => response).catch(response => "Could not retrieve weather!")

 $(document).ready(() => {
        getWeather(29.795662,-95.5676639)
    })


