import { useInfiniteQuery } from "@tanstack/react-query";

const fetchList = async ({
  type = ''
}) => {
  const result = await fetch(
    `https://pokeapi.co/api/v2/type/${type}`
  );
  return result.json();
};

const useGetList = ({ description, fullTime, location }) => {
  return useInfiniteQuery({
    queryKey: ["getList"],
    queryFn: ({ pageParam }) =>
      fetchList({ description, fullTime, location, pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export default useGetList;