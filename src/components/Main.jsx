import React, { useEffect, useState } from "react";
import { Header, Search } from "./";

const Main = () => {
  const [allPuppies, setAllPuppies] = useState([]);
  useEffect(() => {
    async function getAllPuppies() {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      const result = await response.json();
      const puppyArray = result.data.players;
      setAllPuppies(puppyArray);
    }

    getAllPuppies();
  }, []);

  return (
    <div id="main">
      <Header />
      <Search allPuppies={allPuppies} />
    </div>
  );
};

export default Main;
