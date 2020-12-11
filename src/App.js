import React, { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Character'
import axios from 'axios'

const BASE_URL = 'https://swapi.py4e.com/api/people/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterSet, setCharacterSet] = useState(null)

  useEffect(() => {
    axios.get(BASE_URL)
    .then(res => {
      setCharacterSet(res.data.results);
    })
    .catch(err => {
      console.log('oops!')
    })

  }, [])

  console.log(characterSet)

  return (
    <>
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
    <Characters/>
    </>
  );
}

export default App;
