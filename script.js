const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");
Telegram = document.querySelector(".telegram");
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}
soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText("GPe1oVd17sK5fJKzUsHQHdJFGEPNEj6icq1uP7xWpump");
});
twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://x.com/quotesdaysolana`;
    window.open(tweetUrl, "_blank");
});
Telegram.addEventListener("click", ()=>{
    let telegram = `https://t.me/+eMn2cCdGfEJiNzJl`;
    window.open(telegram, "_blank");
});
quoteBtn.addEventListener("click", randomQuote);
