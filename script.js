let randomQuote = Math.trunc(Math.random() * 137);
// console.log(randomQuote);
const quotes = localQuotes[randomQuote].text;
const quotesAuthor = localQuotes[randomQuote].author;
const quote = document.querySelector('.quote');

const author = document.getElementById('author');

author.innerText = quotesAuthor;
quote.innerText = quotes;
