document.write("<p>Guess Number</p>")
var userInput = +prompt("Guess Number btw 1 to 10: ")
var secretNumber = Math.ceil(Math.random()*10)
if (userInput === secretNumber) {
    document.write(`<p>You Guess Right Number${secretNumber}</p>`)
    document.write(`<p>GREAT WORK!!</p>`)
} else {
    document.write(`<p>TRY Again!!</p>`)
}