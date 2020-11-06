import React, { useEffect, useState }  from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Character'


const BASE_URL = 'https://swapi.dev/api/people'

const CharacterArray = []

// const [characterArray, setCharacterArray] = useState([])

axios.get(BASE_URL)
.then(res => {
  CharacterArray.push(res.data.results)
  console.log(CharacterArray)
})
.then(res => {
  CharacterArray.forEach((e) => {
    Characters(e)
  })
})
.catch(err => {
  console.log(err)
})


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>,
    <div>
      <Characters></Characters>
    </div>
  );
}

export default App;
