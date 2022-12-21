import { useHistory } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import useGetList from "../../hooks/useGetList";

const Home = () => {
  const router = useHistory();
  const getTypePokemon = router.location.pathname.replace("/gen-", "");

  const { data } = useGetList(getTypePokemon);

  return (
    <>
      <h1 className="text-4xl text-center font-bold m-5">Pokédek</h1>
      <Navbar />
      <Card />
    </>
  );
};

export default Home;
