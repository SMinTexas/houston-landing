/* 
    Houston Landing Group Project: School Data
    Digital Crafts: Houston Immersive August 2019
    Alina Belova, Ephraim Henderson, Steven Murray
    September 30, 2019 - October 4, 2019
*/

function formatCity(city, state, zip) {
    console.log("city", city, "state", state, "zip",zip)
    return  city + ", " + state + " " + zip ;
    }

function displayCrimeData(num) {
    //let city = document.getElementById("community").selectedIndex;
     
    // let districtName = document.getElementById("city-name");
    // districtName.innerText = formatCity(crime_data[num].city,
    //     crime_data[num].state,
    //     crime_data[num].zip
    //     );
       // console.log(districtName.innerText)
       
    let murder = document.getElementById("crime-item1");
    let rape = document.getElementById("crime-item2");
    let robbery = document.getElementById("crime-item3");
    let assault = document.getElementById("crime-item4");
    let burglary = document.getElementById("crime-item5");
    let theft = document.getElementById("crime-item6");
    let motor_vehicle_theft = document.getElementById("crime-item7");
    let violent_crime = document.getElementById("crime-item8");
    let property_crime = document.getElementById("crime-item9");
    murder.innerText = "Murder Rate " + crime_data[num].murder;
    rape.innerText = "Rape   Rate  " + crime_data[num].rape;
    robbery.innerText = "Robbery Rate " + crime_data[num].robbery;
    assault.innerText = "Assault Rate " + crime_data[num].assault;
    burglary.innerText = "Burglary Rate " + crime_data[num].burglary;
    theft.innerText = "Theft Rate " + crime_data[num].theft;
    motor_vehicle_theft.innerText = "Motor Vehicle Theft " + crime_data[num].motor_vehicle_theft;
    violent_crime.innerText = "Violent Crime Rate " + crime_data[num].violent_crime;
    property_crime.innerText = "Property Crime Rate " + crime_data[num].property_crime;

    let state_violent_crime = document.getElementById("crime-item1State");
    let state_property_crime = document.getElementById("crime-item3State");
     state_violent_crime.innerText = "Violent Crime Rate " + crime_state_avg[0].state_violent_crime;
    state_property_crime.innerText = "Property Crime Rate " + crime_state_avg[0].state_property_crime;
   
}