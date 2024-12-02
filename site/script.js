 
// JavaScript to refresh the meme of the day with a new quote
const quotes = [
    "Believe in yourself and all that you are.",
    "Stay positive, work hard, make it happen.",
    "Success is not for the lazy.",
    "Good things take time."
];

const memes = [
    "🌄 Keep going, you've got this!",
    "🌅 New day, new meme!",
    "🏞 Just meme it!",
    "🌇 Laugh a little, live a lot!"
];

const quoteElement = document.querySelector(".quote");
const memeElement = document.querySelector(".meme");

function refreshMeme() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];

    quoteElement.textContent = `"${randomQuote}"`;
    memeElement.textContent = randomMeme;
}

// Refresh the meme every time the page loads
window.onload = refreshMeme;

