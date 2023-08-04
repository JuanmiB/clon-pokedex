import React from 'react'

const Estadisticas = ({stats}) => {
  return (
  <>
  {
      stats?.map((stat) => {
          const statName = stat.stat.name
          const statValue = stat.base_stat
          return <span key={statName}> {statName}: {statValue}</span>
        }
        )
    }  
    </>
  )
}

export default Estadisticas