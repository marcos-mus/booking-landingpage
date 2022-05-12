import React from "react";
import Header from "../../components/header/Header";
import ListByCity from "../../components/listCity/ListByCity";
import ListByType from "../../components/listType/ListByType";

const Home = () => {
  return (
    <>
      <Header hasBtn={true} />
      <ListByCity />
      <ListByType />
    </>
  );
};

export default Home;
