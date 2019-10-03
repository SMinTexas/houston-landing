function locationPicker(num) {
    switch(num) {
        case 0:
            //Nothing Selected
            return false;
        case 1:
            //Katy
            lat=29.781076;
            long=-95.826537;
            break;
        case 2:
            //Sugar Land
            lat=29.597909;
            long=-95.622444;
            break;
        case 3:
            //Cypress
            lat=29.971491;
            long=-95.693664;
            break;
        case 4:
            //The `woodlands
            lat=30.165192;
            long =-95.46167;
            break;
        case 5:
            //Kingwood
            lat=30.051811;
            long=-95.185519;
            break;
        case 6:
            //La Porte
            lat=29.665630;
            long=-95.022731;
            break;
        case 7:
            //Clear Lake
            lat=29.585216;
            long=-95.132846;
            break;
        case 8:
            //Pearland
            lat=29.563211;
            long=-95.286070;
            break
        case 9:
            //`bellaire
            lat=29.704562;
            long=-95.459282;
        break;
        case 10:
            //Midtown
            lat=29.740815;
            long=-95.375211;
            break;
        

    }
}
/**Removes the "hidden" class for an element or array of elements.
 * 
 * @param {string} cssSelector      A css selector to unhide. Can be a selector that returns multiple elements.
 */
function unhide(cssSelector) {
    let element = $(cssSelector)
    if (Array.isArray(element)) {
        element.forEach(item => {
            // item.removeClass("hidden")
            item.slideDown(1200)
        })
    } else {
        // element.removeClass("hidden")
        element.slideDown(1200)
    }
}

/**Adds the "hidden class to an element or an array of elements"
 * 
 * @param {string} cssSelector      A css selector to hide.
 */
function hide(cssSelector) {
    let element = $(cssSelector)
    if (Array.isArray(element)) {
        element.forEach(item => {
            item.addClass("hidden")
        })
    } else {
        element.addClass("hidden")
    }
}

function animateDivs() {
    $("#myMap, #weather, .crime, .schools").fadeOut(300)
    setTimeout(() => {
        $("#myMap, #weather, .crime, .schools").fadeIn(500)
    }, 800)
}

function main() {
    let cityIndex = document.getElementById("community").selectedIndex;

    if (locationPicker(cityIndex) == false) {
        return false;
    }
    
    cityIndex--

    unhide(".hidden")
    animateDivs()

    setTimeout(() => {
        displaySchoolData(cityIndex)
        displayCrimeData(cityIndex)
        getWeather(lat, long)
        GetMap(lat, long)
    }, 301)
}

let lat = 29.749275
let long = -95.367807
$(window).on("load", () => {
    $("#selector-box").slideDown(1200)
})