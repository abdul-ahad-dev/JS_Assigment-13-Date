

// Task 01


var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var now = new Date();

var currentDay = now.getDate();

var currentHour = now.getHours();

var currentMin = now.getMinutes();

var currentSecond = now.getSeconds();

var ampm;

if (currentHour > 12) {
    ampm = 'PM'
    currentHour = currentHour - 12
    if (currentHour < 10) {
        currentHour = "0" + currentHour
    }
} else {
    currentHour = currentHour + 1
    if (currentHour < 10) {
        currentHour = "0" + currentHour
    }
    ampm = 'AM'
}

if (currentMin < 10) {
    currentMin = "0" + currentMin 
}

if (currentSecond < 10) {
    currentSecond = "0" + currentSecond
}
document.write(`<p class='line'>Today is: ${dayName[currentDay]}</p>`);
document.write("<br>");
document.write(`<p class='line'>Current Time: ${currentHour} ${ampm} : ${currentMin} : ${currentSecond}</p>`);