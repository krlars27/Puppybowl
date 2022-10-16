import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";

const Search = (props) => {
  const allPuppies = props.allPuppies;
  const [puppies, setPuppies] = useState(allPuppies);

  useEffect(()=>{
    setPuppies(allPuppies);
  }, [props.allPuppies]);

  const handleChange = (e) => {
    e.preventDefault();
    searchPuppy(e.target.value);
  };

  const searchPuppy = (searchValue) => {
    if (searchValue !== "") {
      const filteredPuppies = allPuppies.filter(puppy => {
        return puppy.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      
      setPuppies(filteredPuppies);
    } 
    else {
      setPuppies(allPuppies);
    }
  };

  return (
    <div className="searchBar">
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} />
      <SearchResult puppies={puppies} />
    </div>
  );
};

export default Search;
