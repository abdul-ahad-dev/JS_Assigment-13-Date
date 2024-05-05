var now = new Date()

var currentDate = now.getDate();

if (currentDate < 10) {
    currentDate = "0" + currentDate
}

var currentMonth = now.getMonth() + 1;

if (currentMonth < 10) {
    currentMonth = "0" + currentMonth
}

var currentYear = now.getFullYear()

console.log(currentDate)
console.log(currentMonth);
console.log(currentYear);

document.write("<p>DATE FORMAT:</p>");
document.write("<br>")


document.write(`<p>Format One: ${currentMonth}-${currentDate}-${currentYear}</p>`);
document.write("<br>")
document.write(`<p>Format Two: ${currentMonth}/${currentDate}/${currentYear}</p>`);
document.write("<br>")
document.write(`<p>Format Three: ${currentDate}-${currentMonth}-${currentYear}</p>`);
document.write("<br>")
document.write(`<p>Format Four: ${currentDate}/${currentMonth}/${currentYear}</p>`);