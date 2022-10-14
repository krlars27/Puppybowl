import React, { useEffect, useState } from "react";
import { Navbar, AllPuppies, Searchbar, } from './';





const Main = () => {

  const [puppyData, setPuppyData] = useState([]);
  useEffect(() => {
    async function getPuppyData() {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      const result = await response.json();
      const puppies =  result.data.players
      setPuppyData(puppies)

    }
    getPuppyData();
  }, []);
  
  return (
    <div id="main">
    <Navbar/>
    <Searchbar/>
    <AllPuppies puppyData ={puppyData}/>
  </div>
  );
};

export default Main;
