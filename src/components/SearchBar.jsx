import React, { useState } from "react";
import SearchResult from "./SearchResult";

const SearchBar = (props) => {
  const puppyArray = props.puppyApi;
  const [searchInput, setSearchInput] = useState("");
  const [filteredPuppies, setFilteredPuppies] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    searchPuppy(e.target.value);
  };

  const searchPuppy = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput !== "") {
      const filteredData = puppyArray.filter((puppy) => {
        return Object.values(puppy)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredPuppies(filteredData);
    } 
    else {
      setFilteredPuppies(puppyArray);
    }
  };

  return (
    <div className="searchBar">
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} />
      <SearchResult input={searchInput} filteredPuppies={filteredPuppies} puppyArray={puppyArray}/>
    </div>
  );
};

export default SearchBar;
