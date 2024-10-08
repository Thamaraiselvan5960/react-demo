import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // using axios
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     setData(response.data);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // using fetch with then
    // const fetchData =  () => {
    //   try {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(data => data.json())
    //     .then(data => setData(data));
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // using fetch with async await
    const fetchData = async ()=>
    {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setData(data);
      }
      catch(error){
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredData.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
