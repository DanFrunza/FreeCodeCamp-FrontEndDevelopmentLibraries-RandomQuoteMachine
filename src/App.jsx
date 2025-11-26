import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuoteBox />
    </>
  )
}

export default App
