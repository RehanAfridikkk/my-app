import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoveApi = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {
          sname: 'Alice',
          fname: 'John'
        },
        headers: {
          'X-RapidAPI-Key': '3435cf8659msh6983fb29ad6515bp1a5c41jsn2efbf7192b96',
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setResult(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      {result && (
        <div>
          <h2>Love Percentage: {result.percentage}%</h2>
          <p>{result.result}</p>
        </div>
      )}
      {/* <p>helllo</p> */}
    </div>
  );
};

export default LoveApi;
