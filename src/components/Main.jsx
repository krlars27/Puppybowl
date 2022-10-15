import React, { useEffect, useState } from "react";
import { Header, Searchbar } from "./";

const Main = () => {
  const [puppyData, setPuppyData] = useState([]);
  useEffect(() => {
    async function getPuppyData() {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      const result = await response.json();
      const puppies = result.data.players;
      setPuppyData(puppies);
    }
    getPuppyData();
  }, []);

  console.log(puppies)

  return (
    <div id="main">
      <Header />
      <Searchbar puppyData={puppyData} />
    </div>
  );
};

export default Main;
