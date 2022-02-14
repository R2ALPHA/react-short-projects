import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Fun' },
    { id: 'q2', author: 'Gourav', text: 'Learning React is Very Fun' },
    { id: 'q3', author: 'Max', text: 'Learning React is Extreme Fun' },
    { id: 'q4', author: 'AnotherMax', text: 'Learning React is most Fun' },
    { id: 'q5', author: 'NopsMax', text: 'Learning React is another level fun Fun' },
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;