import React, { useEffect, useState } from "react";
import { Header, SearchBar, SearchResult } from "./";

const Main = () => {
  const [puppyApi, setPuppyAPI] = useState([]);
  useEffect(() => {
    async function getPuppyApi() {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      const result = await response.json();
      const puppyArray = result.data.players;
      setPuppyAPI(puppyArray);
    }
    getPuppyApi();
  }, []);

  return (
    <div id="main">
      <Header />
      <SearchBar puppyApi={puppyApi} />
    </div>
  );
};

export default Main;
