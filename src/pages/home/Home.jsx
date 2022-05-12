import React from "react";
import Header from "../../components/header/Header";
import ListByCity from "../../components/listCity/ListByCity";

const Home = () => {
  return (
    <>
      <Header hasBtn={true} />
      <ListByCity />
    </>
  );
};

export default Home;
