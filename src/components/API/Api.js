import React, { useState } from 'react';
import CurrencyEx from './CurrencyexchangeAPI/currencyEx';
import ChuckNorrisJoke from './chucknorisAPI/chuckNorisJoke';
import LoveApi from './LovecalAPI/loveApi';
import "./Api.css"

const App = () => {
  const [showLoveResult, setShowLoveResult] = useState(false);
  const [showCurrencyExchange, setShowCurrencyExchange] = useState(false);
  const [showChuckNorrisJokes, setShowChuckNorrisJokes] = useState(false);

  const handleLoveCalculation = () => {
    setShowLoveResult(true);
    setShowCurrencyExchange(false);
    setShowChuckNorrisJokes(false);
  };

  const handleCurrencyExchange = () => {
    setShowCurrencyExchange(true);
    setShowLoveResult(false);
    setShowChuckNorrisJokes(false);
  };

  const handleChuckNorrisJokes = () => {
    setShowChuckNorrisJokes(true);
    setShowLoveResult(false);
    setShowCurrencyExchange(false);
  };

  return (
    <div className='Apitable'>
      <div className='inside'>
      <h1>API: #1 Love Calculator </h1>
      <button onClick={handleLoveCalculation}>Calculate Love</button>
      {showLoveResult && <LoveApi />}
      </div>
      
      <div className='inside'>
      <h1>API: #2 Currency exchange api</h1>
      <button onClick={handleCurrencyExchange}>Calculate Currency Exchange</button>
      {showCurrencyExchange && <CurrencyEx />}
      </div>
      

      <div className='inside'>
      <h1>API: #3 Chuck Norris Jokes App</h1>
      <button onClick={handleChuckNorrisJokes}>Want to hear a Fact</button>
      {showChuckNorrisJokes && <ChuckNorrisJoke />}
      </div>
      
    </div>
  );
};

export default App;
