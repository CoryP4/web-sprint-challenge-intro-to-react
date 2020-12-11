import React, { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Character'
import axios from 'axios'
import styled from 'styled-components'

const BASE_URL = 'https://swapi.py4e.com/api/people/'

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 300px;
    background: #fffffe;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-top: 10px solid #D86F36; 
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterSet, setCharacterSet] = useState([])

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
    <StyledCard>
    {
      characterSet.map(char => {
        return <Characters key={char.created} name={char.name} birthday={char.birth_year}/>
      })
    }
    </StyledCard>
    </>
  );
}

export default App;
