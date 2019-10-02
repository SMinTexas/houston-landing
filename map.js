// var map = new Microsoft.Maps.Map('#myMap');
// $("myMap").append(map)



// var lat = 29.749275
// var long = -95.367807
function findMapLocation(num) {
    switch(num) {
        case 0:
            //`bellaire
            lat=29.704562;
            long= -95.459282
        break
        case 1:
            //Cypress
            lat=29.971491;
            long= -95.693664
            break
        
        case 2:
            //Clear Lake
            lat=29.585216;
            long= -95.132846
            break

        case 3:
            //Katy
            lat=29.781076;
            long= -95.826537
            break
        case 4:
            //Kingwood
            lat=30.051811;
            long= -95.185519
            break
        case 5:
            //La Porte
            lat=29.665630;
            long= -95.022731
            break
        case 6:
            //Midtown
            lat=29.740815;
            long= -95.375211
            break
        case 7:
            //Pearland
            lat=29.563211;
            long= -95.286070
            break
        case 8:
            //Sugar Land
            lat=29.597909;
            long= -95.622444
            break
        case 9:
            //The `woodlands
            lat=30.165192;
            long= -95.46167
            break   
                            

    }

    GetMap()
}

function GetMap(latitude= 29.749275, longitude= -95.367807) {
    var map = new Microsoft.Maps.Map('#myMap',{
        center:new Microsoft.Maps.Location(latitude,longitude)
    });
}