import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import useGetList from "../../hooks/useGetList";

const Home = ({ type }) => {
  const [pokemons, setPokemons] = useState([]);
  const { data } = useGetList(type);

  const fetchPokemon = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    if (data) {
      data.pokemon_species.forEach(async (item) => {
        const pokemon = await fetchPokemon(item.url);
        setPokemons((prevValue) => [...prevValue, pokemon]);
      });
    }
  }, [data]);

  return (
    <>
      <h1 className="text-4xl text-center font-bold m-5">Pokédek</h1>
      <Navbar />
      <Card />
    </>
  );
};

export default Home;
