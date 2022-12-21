import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import useGetList from "../../hooks/useGetList";

const Home = ({ type }) => {
  const { data } = useGetList(type);

  return (
    <>
      <h1 className="text-4xl text-center font-bold m-5">Pokédek</h1>
      <Navbar />
      <Card />
    </>
  );
};

export default Home;
