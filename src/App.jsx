import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ArbolEvolutivo from './componentes/ArbolEvolutivo'
import Boton from './componentes/Boton'
import ProgressBar from './componentes/ProgressBar'
import Imagen from './componentes/Imagen'
import Estadisticas from './componentes/Estadisticas/Estadisticas'
import Tipos from './componentes/Tipos/Tipos'
import Caracteristicas from './componentes/Caracteristicas/Caracteristicas'
function App() {

  const URL = "https://pokeapi.co/api/v2"
  const [pokemonId, setPokemonId] = useState(1)
  const [pokemon, setPokemon] = useState({})
  const [especie, setEspecie] = useState({})
  const [descripcion, setDescripcion] = useState([])
  const [categoria, setCategoria] = useState('')
  const [URL_CHAINS, setURL_CHAINS] = useState('https://pokeapi.co/api/v2/evolution-chain/1/')
  const [chain, setChain] = useState("")
  const [vida, setVida] = useState(0)
  const [ataque, setAtaque] = useState(0)
  const [defensa, setDefensa] = useState(0)

  useEffect(() => {
    axios.get(`${URL}/pokemon/${pokemonId}`)
      .then((response) => {
        setPokemon(response.data)
        setVida(response.data.stats[0].base_stat)
        setAtaque(response.data.stats[1].base_stat)
        setDefensa(response.data.stats[2].base_stat)

      }).catch((error) => {
        console.log(error);
      }
      )
  }, [pokemonId])

  const URL_ESPECIES = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  useEffect(() => {
    axios.get(`${URL_ESPECIES}`)
      .then((response) => {
        setEspecie(response.data)
        setDescripcion(response.data.flavor_text_entries.find((descripcion) => { return descripcion.language.name === 'en' })?.flavor_text)
        setCategoria(response.data.genera?.find((genera) => { return genera.language.name === "en" })?.genus)
        setURL_CHAINS(response.data.evolution_chain?.url)
      })
      .catch((error) => {
        console.log(error);

      }
      )
  }, [pokemonId])

  //anda a especie.genera
  //Hay?
  //no
  //undefine
  //si
  //Entoces busquemos si hay genus en lo que traes pero solo en eng

  // const categoria = especie.genera?.find((genera) =>
  // { return genera.language.name === "en"})?.genus

  useEffect(() => {
    axios.get(`${URL_CHAINS}`)
      .then((response) => {
        setChain(response.data)

      })
      .catch((error) => {
        console.log(error);
      }
      )
  }, [URL_CHAINS])

  const nombrePrimeraEvolucion = chain?.chain?.species?.name
  const nombreSegundaEvolucion = chain?.chain?.evolves_to[0]?.species?.name
  const nombreTerceraEvolucion = chain?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name

  //recupero el numero de id de las evoluciones dentro de url.
  //agarro el string de la url y lo separo en un array
  //agarro el ultimo elemento del array que es el id
  //lo paso a numero
  //lo guardo en un array

  // const idPrimeraEvolucion = chain?.chain?.species?.url.split("/")
  // console.log(chain?.chain?.species?.url);
  // console.log(idPrimeraEvolucion.filter((elemento) => { return Number(elemento) }))

  // const idSegundaEvolucion = chain?.chain?.evolves_to[0]?.species?.url.split("/")
  // console.log(idSegundaEvolucion.filter((elemento) => { return Number(elemento) }))

  // const idTerceraEvolucion = chain?.chain?.evolves_to[0]?.evolves_to[0]?.species?.url.split("/")
  // console.log(idTerceraEvolucion.filter((elemento) => { return Number(elemento) }))

  const idPrimeraEvolucion = chain?.chain?.species?.url.split("/").filter((elemento) => { return Number(elemento) })
  const idSegundaEvolucion = chain?.chain?.evolves_to[0]?.species?.url.split("/").filter((elemento) => { return Number(elemento) })
  const idTerceraEvolucion = chain?.chain?.evolves_to[0]?.evolves_to[0]?.species?.url.split("/").filter((elemento) => { return Number(elemento) })




  const categoriaFormateada = categoria.split(' ').map((palabra) => {
    return palabra !== "Pokémon" ? palabra : null
  }).join(' ');

  const tipoPokemon = pokemon.types?.map((type) => { return type.type.name })
  const stats = pokemon.stats
  const nombrePokemon = pokemon.name
  const formatedId = "N° " + pokemonId.toString().padStart(4, '0')
  const altura = pokemon.height
  const peso = pokemon.weight
  const habilidades = pokemon.abilities?.map((habilidad) => { return habilidad.ability.name })







  const habilidadNoOculta = pokemon.abilities?.filter((habilidad) => {
    if (habilidad.is_hidden === false) {
      return habilidad.ability.name
    } else { return null }
  })
  // ----------------------------------Funciones----------------------------
  const pokemonPosterior = () => {
    const newPokemonId = pokemonId + 1
    if (newPokemonId === 1011) {
      setPokemonId(1)
    } else {
      setPokemonId(newPokemonId)
    }
  }
  const pokemonAnterior = () => {
    const newPokemonId = pokemonId - 1
    if (newPokemonId === 0) {
      setPokemonId(1010)
    } else {
      setPokemonId(newPokemonId)
    }
  }
  //------------------------------------------------------------------------

  return (
    <>
      <div className='contenedorBlanco'>
        <Boton
          key={pokemonId}
          nombrePokemon={nombrePokemon}
          formatedId={formatedId}
          pokemonPosterior={pokemonPosterior}
          pokemonAnterior={pokemonAnterior}
        />
        <div className='cuerpoApp'>
          <div className="contenedor">
            <div className='parteIzq'>
              <Imagen id={pokemonId} />
              <div>
                Puntos Base
                <Estadisticas
                  stats={stats} />
              </div>
            </div>
            <div className='parteDer'>
              <div className='description'>
                <p style={{marginBottom: 15 }}>
                  {descripcion || "No hay descripcion"}
                </p>
                <span style={{marginBottom: 30}}>Versiones:</span>
          <Caracteristicas
          altura={altura}
          peso={peso}
          categoriaFormateada={categoriaFormateada}
          habilidadNoOculta={habilidadNoOculta}
          
  />



              </div>
              <div className='typeAndWeak'>
                <Tipos
                  pokemonTypes={tipoPokemon}
                />
                <h2>Debilidad:</h2>
                <div className='weak'>
                  <span>Fuego</span>
                  <span>Hielo</span>
                  <span>Volador</span>
                  <span>Psiquico</span>
                </div>
              </div>
            </div>
          </div>

          <ArbolEvolutivo
            idPrimeraEvolucion={idPrimeraEvolucion}
            nombrePrimeraEvolucion={nombrePrimeraEvolucion}
            idSegundaEvolucion={idSegundaEvolucion}
            nombreSegundaEvolucion={nombreSegundaEvolucion}
            idTerceraEvolucion={idTerceraEvolucion}
            nombreTerceraEvolucion={nombreTerceraEvolucion}
          />
        </div>
      </div>
    </>
  )
}
export default App
