// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'


// const BASE_URL = 'https://swapi.py4e.com/api/people/'

export default function Characters({ name, birthday }) {

    return(
        <div>
            <h2>{name}</h2>
            <p>{birthday}</p>
        </div>
    )
    
}