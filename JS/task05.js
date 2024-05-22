document.write("<p>Days Left before 14 August</p>");

var now = new Date
var currentDate = now.getDate()

document.write(`<p>${currentDate}</p>`)

var user = new Date("August, 14 2024")
var userDate = user.getDate()
document.write(`<p>${userDate}</p>`)