import React, { useEffect, useState } from 'react';

function QuoteBox() {
    const [currentQuote, setQuote] = useState(null);
    const [currentAuthor, setAuthor] = useState(null);
    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);
    const root = document.documentElement; var colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];
    useEffect(() => {
        if (data === null) {
            // Run your effect logic here
            // This code block will only execute when 'data' is null
            fetchData();
        }
    }, [data]); // Add 'data' to the dependency array
    const fetchData = async () => {
        try {
            const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'); // Replace with your API endpoint
            console.log('Network call');
            if (response.ok) {
                const jsonData = await response.json();
                setData(jsonData);
                // setIndex(Math.round(Math.random() * 102));
                setIndex(Math.round(Math.random() * 102));
                setQuote(jsonData.quotes[index].quote ?? '');
                setAuthor(jsonData.quotes[index].author ?? '');
                root.style.setProperty('--main-color', colors[index % 12]);
            } else {
                // Handle error response
                console.log('API request failed');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    };

    // fetchData();
    // }, []); // Empty dependency array to run the effect only once

    function changeQuote() {
        setIndex(Math.round(Math.random() * 102));
        setQuote(data.quotes[index].quote);
        setAuthor(data.quotes[index].author);
        root.style.setProperty('--main-color', colors[index % 12]);
    }
    let twitterUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
    return (
        <div>
            {data ? (
                <div id="quote-box">
                    <h1>Random Quotes!</h1>
                    <p id="text">{currentQuote}</p>
                    <p id="author">- {currentAuthor}</p>
                    <div className="buttons">
                        <a
                            className="button"
                            id="tweet-quote"
                            title="Tweet this quote!"
                            target="_blank"
                            rel="noreferrer"
                            href={twitterUrl}
                        >
                            <i className="fa fa-twitter"></i>
                        </a>
                        <button id="new-quote" onClick={changeQuote}>New Quote!</button>
                    </div>
                </div>
            ) : (
                <div id="quote-box">
                    <p>Loading data...</p>
                </div>
            )}
        </div>
    );
}

export default QuoteBox;


// import React, { Component } from 'react'

// let quoteAPI = [{ "q": "Either you choose to stay in the shallow end of the pool or you go out into the ocean.", "a": "Christopher Reeve", "h": "<blockquote>&ldquo;Either you choose to stay in the shallow end of the pool or you go out into the ocean.&rdquo; &mdash; <footer>Christopher Reeve</footer></blockquote>" }];

// const url = 'https://zenquotes.io/api/random';

// async function fetchData(url) {
//     const response = await fetch(url);
//     quoteAPI = await response.json();
//     console.log(quoteAPI)
// }





// export default class QuoteBox extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//     }
//     render() {
//         // fetchData(url);
//         console.log(quoteAPI)
//         return (
//             <div id="quote-box">
//                 <h1>Random Quote Machine!</h1>
//                 <p id="text">{quoteAPI[0].q}</p>
//                 <p id="author">{quoteAPI[0].a}</p>
//                 <button id="new-quote">New Quote!</button>
//             </div>
//         )
//     }
// }
