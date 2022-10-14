import React, { useState } from "react";

const Searchbar = (props) => {
  const puppies = props.puppyData;

  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    puppies.filter((puppy) => {
      return puppy.match(searchInput);
    });
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search: </label>
      <input type="text" onChange={handleChange} value ={searchInput} />
    </div>
  );
};

export default Searchbar;
