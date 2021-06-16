// Importing quotation variable from external file
import quotations from "./quote.js";
//Variables
const color = document.querySelector("#quote-box");
const tweet = document.getElementById("tweet-quote");
const facebook = document.getElementById("facebook-quote");
let quoteText = document.querySelectorAll(
    "#text, #author, #auth-text, #quote-text"
);
let quoteTextCopy = [...quoteText];

// Return Random Number
function getNum() {
    return Math.floor(Math.random() * quotations.length - 1);
}
// Set Quote
function setQuote(quote, author) {
    $("#text").text(quote);
    $("#author").text(author);
}
// Get Random Quote
function getQuote() {
    let variable = quotations[getNum()];
    setQuote(variable.quote, variable.author);
}
// Return Random Quote < 10 words in length
function shortQuote() {
    let shortQ = quotations[getNum()];
    let length = shortQ.quote.split(" ").length;

    while (length > 10) {
        shortQ = quotations[getNum()];
        length = shortQ.quote.split(" ").length;
    }
    setQuote(shortQ.quote, shortQ.author);
}
// Return Random Quote >= 10 words in length
function longQuote() {
    let longQ = quotations[getNum()];
    let length = longQ.quote.split(" ").length;

    while (length <= 10) {
        longQ = quotations[getNum()];
        length = longQ.quote.split(" ").length;
    }
    setQuote(longQ.quote, longQ.author);
}
// Change border color based on click event
function longColorChange() {
    color.style.borderColor = "#DC3545";
    tweet.style.backgroundColor = "#DC3545";
    facebook.style.backgroundColor = "#DC3545";
}
function shortColorChange() {
    color.style.borderColor = "#0d6efd";
    tweet.style.backgroundColor = "#0d6efd";
    facebook.style.backgroundColor = "#0d6efd";
}
function defaultColor() {
    color.style.borderColor = "#198754";
    tweet.style.backgroundColor = "#198754";
    facebook.style.backgroundColor = "#198754";
}
// transition text
function animate() {
    quoteTextCopy.forEach((element) => {
        element.animate(
            [
                { opacity: 0, color: "#fff" },
                { opacity: 1, color: "#000" },
            ],
            300
        );
    });
}

// On Page Load
$(document).ready(function () {
    getQuote();
});
// On Click New Quote + Author
$("#new-quote").click(function () {
    getQuote();
    defaultColor();
    animate();
});
$("#short-quote").click(function () {
    shortQuote();
    shortColorChange();
    animate();
});
$("#long-quote").click(function () {
    longQuote();
    longColorChange();
    animate();
});
