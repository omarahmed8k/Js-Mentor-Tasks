document.getElementById("calculate").addEventListener("click", myFunction);
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

function myFunction() {
    let userDate = document.getElementById('age').value;
    let date = new Date(userDate);
    // let userDay = date.getDate();
    // let userMonth = date.getMonth() + 1;
    let userYear = date.getFullYear();
    let age = year - userYear;
    let months = age * 12;
    let days = months * 30;
    let error = document.getElementById("error");

    if (isNaN(age) == false) {
        document.getElementById('years').innerHTML = age;
        document.getElementById('months').innerHTML = months;
        document.getElementById('days').innerHTML = days;
        error.innerHTML = "";
    } else {
        error.innerHTML = "Please Add Your Birthdate";
    }
};
