var sundayBtw24To50 = 0;

document.write(`<p>Sunday on 1 January between 2024 to 2050</p>`)
for (let i = 2024; i < 2051; i++) {
    var now = new Date(`January 1, ${i}`);
    if (now.getDay() == 0) {
        document.write(`<p>1 January on sunday at year ${i}</p>`);
        sundayBtw24To50++
    }   
}
document.write("<br>");

document.write(`<p>Total sunday on 1 January between 2024 to 2050 is: ${sundayBtw24To50}</p>`)