import React, { useState } from "react";
import AllPuppies from "./AllPuppies";

const Searchbar = (props) => {
  const puppies = props.puppyData;
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    searchPuppy(e.target.value);
  };

  const searchPuppy = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = puppies.filter((puppy) => {
        return Object.values(puppy)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(puppies);
    }
  };

  return (
  <div className="searchBar">
    <label htmlFor="search">Search: </label>
    <input onChange={handleChange} />
    <AllPuppies input={searchInput} filter={filteredResults}/>
  </div>);
};

export default Searchbar;

// const Searchbar = (props) => {
//   const puppies = props.puppyData;

//   const [searchInput, setSearchInput] = useState("");
//   const handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//   };

//   if (searchInput.length > 0) {
//     puppies.filter((puppy) => {
//       return puppy.name.match(searchInput);
//     });
//   }

//   return (
//     <div className="searchbar">
//       <label htmlFor="search">Search: </label>
//       <input type="text" onChange={handleChange} value={searchInput} />
//       <div>{searchInput}</div>
//     </div>
//   );
// };

// export default Searchbar;
