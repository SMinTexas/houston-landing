/* 
    Houston Landing Group Project: School Data
    Digital Crafts: Houston Immersive August 2019
    Alina Belova, Ephraim Henderson, Steven Murray
    September 30, 2019 - October 4, 2019
*/

function formatDistrict(name, address, city, state, zip, phone) {
    return name + " | " + address + " | " + city + ", " +
        state + " " + zip + " | " + phone;
}

function displaySchoolData() {
    let city = document.getElementById("community").selectedIndex;

    let districtName = document.getElementById("district-name");
    districtName.innerText = formatDistrict(school_data[city].school_district,
        school_data[city].address,
        school_data[city].city,
        school_data[city].state,
        school_data[city].zip,
        school_data[city].phone);
    let gradRate = document.getElementById("item1");
    let dropRate = document.getElementById("item2");
    let spend = document.getElementById("item3");
    let ratio = document.getElementById("item4");
    let numSchools = document.getElementById("item5");
    let numStudents = document.getElementById("item6");
    let numTeachers = document.getElementById("item7");
    gradRate.innerText = "Graduation Rate " + school_data[city].graduation_rate;
    dropRate.innerText = "Dropout   Rate  " + school_data[city].dropout_rate;
    spend.innerText = "Per Pupil Spending " + school_data[city].per_pupil_spending;
    ratio.innerText = "Students / Teachers " + school_data[city].students_per_teacher;
    numSchools.innerText = "Number of Schools " + school_data[city].number_of_schools;
    numStudents.innerText = "Number of Students " + school_data[city].number_of_students;
    numTeachers.innerText = "Number of FTE Teachers " + school_data[city].number_of_teachers;

    let stateGradRate = document.getElementById("item1State");
    let stateDropRate = document.getElementById("item2State");
    let stateSpend = document.getElementById("item3State");
    let stateRatio = document.getElementById("item4State");
    stateGradRate.innerText = "Graduation Rate " + state_avg[0].graduation_rate;
    stateDropRate.innerText = "Dropout Rate " + state_avg[0].dropout_rate;
    stateSpend.innerText = "Per Pupil Spending " + state_avg[0].per_pupil_spending;
    stateRatio.innerText = "Students / Teachers " + state_avg[0].students_per_teacher;
}