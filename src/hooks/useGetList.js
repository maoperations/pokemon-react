import { useQuery } from "@tanstack/react-query";

const fetchList = async (type) => {
  const result = await fetch(`https://pokeapi.co/api/v2/generation/${type}`);
  return result.json();
};

const useGetList = (type) => {
  return useQuery(["generation", { type: type }], () => {
    return fetchList(type);
  });
};

export default useGetList;
