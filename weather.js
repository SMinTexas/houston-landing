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
    var weatherRetrievalPromise = new Promise((resolve, reject) => {
        $.ajax({
            type:"GET",
            url:"https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d214c5fcf05f3b01634b585077751866/29.795662,-95.5676639", //NO Key
            dataType:"JSON",
            success: (response) => {
                resolve([response]);
            },
            error: (response, errString) => {
                reject([response, errString]);
            }
        })
    })


 $(document).ready(() => {
    weatherRetrievalPromise.then(arrResolution =>{
        console.log(arrResolution[0]);
    }).catch(arrResolution => {
        console.log(arrResolution[1]);
    })
 })



