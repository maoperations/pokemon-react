import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import useGetList from '../../hooks/useGetList'
import Modals from '../../components/Modals'

const Home = ({ type }) => {
  const [pokemons, setPokemons] = useState([])

  const [showModal, setShowModal] = useState(false)
  const [dataModal, setDataModal] = useState()

  const router = useHistory()

  const { data } = useGetList(type)

  const fetchPokemon = async name => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await response.json()
  }

  const onOpenModal = pokemon => {
    setDataModal(pokemon)
    setShowModal(true)
  }
  const onCloseModal = () => {
    setDataModal()
    setShowModal(false)
  }

  useEffect(() => {
    if (data) {
      data.pokemon_species.forEach(async item => {
        const pokemon = await fetchPokemon(item.name)
        setPokemons(prevValue =>
          [...prevValue, pokemon].sort((a, b) => a.id - b.id)
        )
      })
    }
  }, [data])

  useEffect(() => {
    setPokemons([])
  }, [router.location.pathname])

  return (
    <>
      <h1 className='text-4xl text-center font-bold m-5'>Pokédek</h1>
      <Navbar />

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 mx-5 mt-5'>
        {pokemons.map((pokemon, idx) => (
          <Card
            key={idx}
            id={pokemon.id}
            title={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types}
            onOpen={() => onOpenModal(pokemon)}
          />
        ))}
      </div>

      <Modals data={dataModal} show={showModal} onClose={onCloseModal} />
    </>
  )
}

export default Home
