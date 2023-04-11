import "./App.css";
/* import Text from "./components/Text"; */
import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  //making a call to the API to get the random quote
  const newQuote = () => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomQuote = Math.floor(Math.random() * data.quotes.length);
        setQuotes(data.quotes[randomQuote]);
      });

    //select items that I want to change its color on click
    const body = document.querySelector("body");
    const quote = document.querySelector("svg");
    const clicks = document.querySelector("button");
    const tweet = document.querySelector(".fa-twitter");

    //generate random color
    let symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }
    body.style.background = color;
    quote.style.color = color;
    clicks.style.background = color;
    tweet.style.background = color;
  };

  //to have a new quote generated once the page has loaded
  useEffect(() => {
    newQuote();
  }, []);

  return (
    <div>
      <div id="quote-box">
        <div className="quote">
          <i className="bi bi-quote">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-quote"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
            </svg>
          </i>
          <div id="text">{quotes.quote}</div>
        </div>
        <div id="author">-{quotes.author}</div>
        <div className="btn-icon">
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <button onClick={newQuote} id="new-quote" className="btn">
            New quote
          </button>
        </div>
      </div>
      <footer>By: Esraa</footer>
    </div>
  );
}

export default App;
