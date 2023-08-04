import React from 'react'

const Imagen = ({id}) => {
    return (
        <div className='pokeImg'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
        </div>
    )
}

export default Imagen