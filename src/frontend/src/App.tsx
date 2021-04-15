import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  async function getApi() {
    console.log('hello')
    const res = await axios.get('http://localhost:8080/api/tests')
    console.log(res.data)
  }

  return (
    <div className="App">
      <button onClick={() => getApi()}>click</button>
    </div>
  );
}

export default App;
