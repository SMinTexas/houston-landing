function locationPicker(num) {
    switch(num) {
        case 8:
            //`bellaire
            lat=29.704562;
            long=-95.459282
        break
        case 2:
            //Cypress
            lat=29.971491;
            long=-95.693664
            break
        
        case 6:
            //Clear Lake
            lat=29.585216;
            long=-95.132846
            break

        case 0:
            //Katy
            lat=29.781076;
            long=-95.826537
            break
        case 4:
            //Kingwood
            lat=30.051811;
            long=-95.185519
            break
        case 5:
            //La Porte
            lat=29.665630;
            long=-95.022731
            break
        case 9:
            //Midtown
            lat=29.740815;
            long=-95.375211
            break
        case 7:
            //Pearland
            lat=29.563211;
            long=-95.286070
            break
        case 1:
            //Sugar Land
            lat=29.597909;
            long=-95.622444
            break
        case 3:
            //The `woodlands
            lat=30.165192;
            long =-95.46167
            break  
    }
    console.log(lat, long)
}  

function main() {
    let cityIndex = document.getElementById("community").selectedIndex;
    console.log(cityIndex)


    locationPicker(cityIndex)
    displaySchoolData(cityIndex)
    getWeather(lat, long)
    console.log(lat)
    GetMap(lat, long)
}

let lat = 29.749275
let long = -95.367807
