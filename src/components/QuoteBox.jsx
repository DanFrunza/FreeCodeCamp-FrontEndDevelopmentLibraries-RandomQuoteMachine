import React, { Component } from 'react';
import { connect } from "react-redux";
import { setRandomQuote } from "../features/quotes/quotesReducer";

class QuoteBox extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { quote, onNewQuote } = this.props;
        
        return (
        
            <div id="quote-box" className="card w-100 shadow-lg rounded-4 p-4 text-center" style={{ width: '800px',  minHeight: 'auto',  margin: '0 auto', wordWrap: 'break-word' }}>
                <h1 className="mb-4 fw-bold text-primary">Random Quote Machine</h1>
                <blockquote className="blockquote mb-3">
                    <p id="text" className="fs-3 fst-italic">"{quote.text}"</p>
                </blockquote>
                <footer id="author" className="blockquote-footer fs-5 mb-4">
                     {quote.author}
                </footer>

                <div className="d-flex justify-content-center gap-5">
                    <button id="new-quote" className="btn btn-primary px-4" onClick={onNewQuote}>
                         New Quote
                    </button>
                    <a id="tweet-quote" className="btn btn-outline-secondary d-flex align-items-center gap-2" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" — ${quote.author}`)}`} target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-x-twitter"></i>
                        <span>Tweet</span>
                    </a>
                </div>
            </div>
        );

    }
}

const mapDispatchToProps = (dispatch) => ({
    onNewQuote: () => dispatch(setRandomQuote())
});

const mapStateToProps = (state) => ({
    quote: state.quotes.quote
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);