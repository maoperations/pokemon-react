import { useQuery } from "@tanstack/react-query";

const fetchList = async (name) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  return result.json();
};

const usePokemon = (name) => {
  return useQuery(["species", { name: name }], () => {
    return fetchList(name);
  });
};

export default usePokemon;
