import { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Fun' },
    { id: 'q2', author: 'Gourav', text: 'Learning React is Very Fun' },
    { id: 'q3', author: 'Max', text: 'Learning React is Extreme Fun' },
    { id: 'q4', author: 'AnotherMax', text: 'Learning React is most Fun' },
    { id: 'q5', author: 'NopsMax', text: 'Learning React is another level fun Fun' },
];

const QuoteDetail = () => {

    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found !</p>;
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments />
        </Route>
    </Fragment>
};

export default QuoteDetail;