import React from 'react'
import { useState } from 'react'
const Tipos = ({pokemonTypes}) => {

  
  return (
      <div className='type'>
        <h2 style={{marginBottom: 12}}>Types:</h2>
    {
      pokemonTypes?.map((type) => {
        return <span style={{backgroundColor: "yellow"}}  key={type}>{type}</span>
      })
    }
  </div>
  )
}

export default Tipos