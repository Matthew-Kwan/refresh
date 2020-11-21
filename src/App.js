import React, { useState, useEffect } from 'react' 
import Quotes from './components/Quotes'

function App() {

  // STATES
  const [quote, setQuote] = useState('Test Quote');
  
  const changeQuote = () => {
    setTimeout(() => {
      setQuote(String(Math.random()))
    },5000)
  }

  return (
    <div className="App">

      <h1 className='title'> Refresh </h1>
      <p className='subtitle'>The pit stop your mind needs to refresh.</p>
      <Quotes quote={quote}/> 
      
    </div>
  );
}

export default App;
