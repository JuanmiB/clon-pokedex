import React from 'react'

const ArbolEvolutivo = ({ idPrimeraEvolucion, nombrePrimeraEvolucion, idSegundaEvolucion, nombreSegundaEvolucion, idTerceraEvolucion, nombreTerceraEvolucion }) => {
    return (
        <article className='arbolEvolutivo'>
            <h2>Evoluciones</h2>
            <div className='evoluciones'>
                <div className='evolucion'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPrimeraEvolucion}.png`} alt="" />
                    <span>{nombrePrimeraEvolucion}</span>

                    {
                        idSegundaEvolucion &&
                        <>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idSegundaEvolucion}.png`} alt="" />
                            <span>{nombreSegundaEvolucion}</span>

                        </>
                    }
                    {
                        idTerceraEvolucion &&
                        <>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idTerceraEvolucion}.png`} alt="" />
                            <span>{nombreTerceraEvolucion}</span>
                        </>
                    }


                </div>
            </div>
        </article>
    )
}

export default ArbolEvolutivo