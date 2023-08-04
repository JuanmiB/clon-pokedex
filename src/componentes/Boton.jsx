import React from 'react'
import './Boton.css'
const Boton = ({nombrePokemon, formatedId, pokemonAnterior, pokemonPosterior}) => {
  return (
<section>
    <div className="contenedorBotones">
        <div className="izq">
            <button className='btn' onClick={pokemonAnterior} >.</button>
        </div>
espa
        <div className="derecha">
            <button className='btn' onClick={pokemonPosterior}>.</button>
        </div>
    </div>
    <div className="pokedex-pokemon-pagination-title">
        <div className="nombre">
    <h1>{nombrePokemon} {formatedId}</h1>
        </div>
    </div>
</section>
  )
}

export default Boton