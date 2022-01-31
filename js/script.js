//constant
var todaysDate = new Date();
const ourAnniversary = new Date("2017-03-04T21:07:00")

//select DOM
outputInSeconds = document.querySelector('.seconds');
outputInMinutes = document.querySelector('.minutes');
outputInHours = document.querySelector('.hours');
outputInDays = document.querySelector('.days');
outputInMonths = document.querySelector('.months');
outputInYears = document.querySelector('.years');

textArray = document.querySelector('.output');

//event listeners
outputInSeconds.addEventListener('click', yearsInSeconds);
outputInMinutes.addEventListener('click', yearsInMinutes);
outputInHours.addEventListener('click', yearsInHours);
outputInDays.addEventListener('click', yearsInDays);
outputInMonths.addEventListener('click', yearsInMonths);
outputInYears.addEventListener('click', years);

//functions
function yearsInSeconds(){
    days = everythingIntoDays();
    daysIntoMinutes = days * 24 * 60 * 60;
    textArray.innerText = daysIntoMinutes + " seconds";
};

function yearsInMinutes(){
    days = everythingIntoDays();
    daysIntoMinutes = days * 24 * 60;
    textArray.innerText = daysIntoMinutes + " minutes";
};

function yearsInHours(){
    days = everythingIntoDays();
    daysIntoHours = days * 24;
    textArray.innerText = daysIntoHours + " hours";
};

function yearsInDays(){
    days = everythingIntoDays();
    textArray.innerText = days + " days";
};


function yearsInMonths(){
    days = everythingIntoDays();
    daysIntoMonths = (days / 365) * 12 ;
    textArray.innerText = daysIntoMonths + " months";

};

function years(){
    days = everythingIntoDays();
    daysIntoYears = days / 364;
    textArray.innerText = daysIntoYears + " years";
}

function everythingIntoDays(){
    exactAmountOfDays = (todaysDate.getTime() - ourAnniversary.getTime()) / (1000 * 3600 * 24)
    return exactAmountOfDays;
}

