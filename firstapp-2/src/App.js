import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="text-center">
      <h1>Hello World!</h1>
      <div className='container pb-3 row min-vh-100'>
      {data.map((ele) => {
        return <Card key={ele.id} {...ele} />;
      })}
      </div>
    </div>
  );
}

export default App;
