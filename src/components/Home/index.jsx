import React from "react";
import Categories from "./CategoriesDashboard";
import CreateNewsletter from "./CreateNewsletter";
import MainCard from "./MainCard";
import MapData from "./MapData";
import { Container } from "./style";
// import { data } from '../../utils/auth/data';

const Home = () => {
  return (
    <div>
      <MainCard />
      <Container>
        <Categories />
        <MapData />
      </Container>
      <CreateNewsletter />
    </div>
  );
};

export default Home;
