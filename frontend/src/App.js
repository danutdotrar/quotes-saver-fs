import { useState, useEffect } from "react";
import quoteService from "./services/quotes";

const App = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [quotesList, setQuotesList] = useState([]);

    useEffect(() => {
        quoteService.getAll().then((response) => setQuotesList(response.data));
    }, []);

    const handleQuoteChange = (e) => {
        setQuote(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const addQuote = (e) => {
        e.preventDefault();
        const quotesObject = { quote: quote, author: author };

        quoteService.create(quotesObject).then((response) => {
            setQuotesList(quotesList.concat(response.data));
            setQuote("");
            setAuthor("");
        });
    };

    const deleteQuote = (id) => {
        const quotes = quotesList.filter((quote) => quote.id !== id);

        quoteService.deleteQuote(id).then(() => setQuotesList(quotes));
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
