import React from "react";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import ListByCity from "../../components/listCity/ListByCity";
import ListByType from "../../components/listType/ListByType";

const Home = () => {
  return (
    <>
      <Header hasBtn={true} />
      <ListByCity />
      <ListByType />
      <Featured />
    </>
  );
};

export default Home;
