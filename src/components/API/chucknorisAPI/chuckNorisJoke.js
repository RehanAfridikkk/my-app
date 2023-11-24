import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChuckNorrisJoke = () => {
  const [randomJoke, setRandomJoke] = useState(null);
  const [searchedJokes, setSearchedJokes] = useState(null);

  useEffect(() => {
    // Fetching a random Chuck Norris joke
    const fetchRandomJoke = async () => {
      const options = {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        headers: {
          accept: 'application/json',
          'X-RapidAPI-Key': '3435cf8659msh6983fb29ad6515bp1a5c41jsn2efbf7192b96',
          'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response);
        setRandomJoke(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetching Chuck Norris jokes based on a search query (replace '<REQUIRED>' with an actual query)
    const fetchSearchedJokes = async () => {
      const options = {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search',
        params: {
          query: '<REQUIRED>'
        },
        headers: {
          accept: 'application/json',
          'X-RapidAPI-Key': '3435cf8659msh6983fb29ad6515bp1a5c41jsn2efbf7192b96',
          'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setSearchedJokes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomJoke();
    fetchSearchedJokes();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      {randomJoke && (
        <div>
          <h2>Random Chuck Norris Joke:</h2>
          <p>{randomJoke.value}</p>
        </div>
      )}

      {searchedJokes && (
        <div>
          <h2>Searched Chuck Norris Jokes:</h2>
          <ul>
            {searchedJokes.result.map((joke, index) => (
              <li key={index}>{joke.value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChuckNorrisJoke;
