import React from 'react'

const Habilidad = ({habilidad}) => {
    const copyHabilidad = {...habilidad}
    console.log(copyHabilidad);
  return (
    <>
    Habilidad:{
        copyHabilidad.map((habilidad) => {
            return <span key={habilidad}>{habilidad}</span>
          }
            )
    }
    
    </>
  )
}

export default Habilidad