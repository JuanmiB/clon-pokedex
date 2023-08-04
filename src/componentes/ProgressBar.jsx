import React from 'react'
import { useState } from 'react'
import './ProgressBar.css'
const ProgressBar = (hp, atk, def) => {
    const [progress, setProgress] = useState(0)
    const [vida, setVida] = useState(hp)
    const [ataque, setAtaque] = useState(atk)
    const [defensa, setDefensa] = useState(def)

    const increment = () => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10))

    }
    const estadistica = [vida, ataque, defensa]


    const getColor = (percent) => {
        if (percent === 100) return 'green'
        return percent > 50 ? 'lightgreen' : 'red'
    }


    return (   
 <div className='container'>
    <div className="progress-bar">
        {
            estadistica.map((stat, index) => (
                <div key={index} className="progress-bar-fill" style={{ backgroundColor: getColor(progress) }}>
                    <div className="progress-done" style={{ width: `${stat}%`, opacity: 1 }}>
                    </div>
                </div>
            ))
        }
        <div className="progress-label">50%
        </div>
        <button onClick={increment}>{progress}</button>
        <button>reset</button>
    </div>
</div>
  )
}
{/* <div 
className="progress-bar-fill"
style={{ width: `${progress}%`, backgroundColor: getColor(progress) }}
>
    progress bar
</div> */}

export default ProgressBar