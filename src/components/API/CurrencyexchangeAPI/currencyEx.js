import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyEx = () => {
  const [quoteList, setQuoteList] = useState(null);
  const [exchangeResult, setExchangeResult] = useState(null);

  useEffect(() => {
    // Fetching the list of available quotes
    const fetchQuoteList = async () => {
      const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/listquotes',
        headers: {
          'X-RapidAPI-Key': '3435cf8659msh6983fb29ad6515bp1a5c41jsn2efbf7192b96',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setQuoteList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetching the exchange rate from SGD to MYR
    const fetchExchangeRate = async () => {
      const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        params: {
          from: 'SGD',
          to: 'MYR',
          q: '1.0'
        },
        headers: {
          'X-RapidAPI-Key': '3435cf8659msh6983fb29ad6515bp1a5c41jsn2efbf7192b96',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setExchangeResult(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuoteList();
    fetchExchangeRate();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      {quoteList && (
        <div>
          <h2>Available Quotes:</h2>
          <ul>
            {quoteList.map((quote, index) => (
              <li key={index}>{quote}</li>
            ))}
          </ul>
        </div>
      )}

      {exchangeResult && (
        <div>
          <h2>Exchange Rate:</h2>
          <p>{`1 SGD = ${exchangeResult} MYR`}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyEx;
