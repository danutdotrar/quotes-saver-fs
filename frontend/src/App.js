import { useState } from "react";

const App = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [quotesList, setQuotesList] = useState([
        {
            quote: "Whatever the mind of man can conceive and believe, it can achieve.",
            author: "Napoleon Hill",
            id: 1,
        },
        {
            quote: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein",
            id: 2,
        },
        {
            quote: "Eighty percent of success is showing up.",
            author: "Woody Allen",
            id: 3,
        },
    ]);

    const handleQuoteChange = (e) => {
        console.log(e.target.value);
        setQuote(e.target.value);
    };

    const handleAuthorChange = (e) => {
        console.log(e.target.value);
        setAuthor(e.target.value);
    };

    const addQuote = (e) => {
        e.preventDefault();
        const quotesObject = { quote: quote, author: author, id: generateId() };

        if (quote && author) {
            setQuotesList(quotesList.concat(quotesObject));
        }

        setQuote("");
        setAuthor("");
    };

    const generateId = () => {
        return Math.floor(Math.random() * 10000);
    };

    const deleteQuote = (id) => {
        const quotes = quotesList.filter((quote) => quote.id !== id);
        setQuotesList(quotes);
    };

    return (
        <>
            <h1>Quotes Saver</h1>
            <form
                onSubmit={addQuote}
                style={{ display: "inline-flex", flexDirection: "column" }}
            >
                Quote:{" "}
                <textarea
                    type="text"
                    value={quote}
                    onChange={handleQuoteChange}
                />
                Author:{" "}
                <input
                    type="text"
                    value={author}
                    onChange={handleAuthorChange}
                />
                <button type="submit">Save Quote</button>
            </form>

            <h1>Quote List</h1>
            <div>
                {quotesList.map((item) => {
                    return (
                        <ul key={item.id}>
                            <li>
                                {item.quote} - {item.author}{" "}
                                <button onClick={() => deleteQuote(item.id)}>
                                    delete
                                </button>
                            </li>
                        </ul>
                    );
                })}
            </div>
        </>
    );
};

export default App;
