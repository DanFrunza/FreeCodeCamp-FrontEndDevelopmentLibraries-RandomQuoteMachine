
const initialState = {
  quote: { text: "Nothing's working without a push!", author: "Author" },
  quotesList: [
    
{ text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" }

  ]
};

const SET_RANDOM_QUOTE = 'quotes/SET_RANDOM_QUOTE';

export const setRandomQuote = () => ({
    type: SET_RANDOM_QUOTE
});

export default function quotesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RANDOM_QUOTE:
            const randomIndex = Math.floor(Math.random() * state.quotesList.length);
            return {
                ...state,
                quote: state.quotesList[randomIndex]
            }
        default:
            return state;
    }
};