document.getElementById("calculate").addEventListener("click", myFunction);
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

function myFunction() {
    let userDate = document.getElementById('age').value;
    let date = new Date(userDate);
    let userMonth = date.getMonth() + 1;
    let userYear = date.getFullYear();
    if (month < userMonth) {
        age = year - userYear - 1;
        months = age * 12 + month;
        days = age * 365 + month * 31;
    }
    let error = document.getElementById("error");

    if (isNaN(age) == false) {
        document.getElementById('years').innerHTML = age;
        document.getElementById('months').innerHTML = months;
        document.getElementById('days').innerHTML = days;
        error.innerHTML = '';
;
    } else {
        error.innerHTML = "Please Add Your Birthdate";
    }
};
