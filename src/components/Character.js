// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledItems = styled.div`
    padding: 10px;
    margin: 10px;
    display: grid;
    grid-gap: 10px;
    line-height: 1.15;
`

export default function Characters({ name, birthday }) {

    return(
        <StyledItems>
            <h2>Name: {name}</h2>
            <p>Birthday: {birthday}</p>
        </StyledItems>
    )
    
}