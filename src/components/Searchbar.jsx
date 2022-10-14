import React, { useState } from "react";

const Searchbar = (props) => {
  const MyPuppies = props.puppyData;

  const [searchInput, setSearchInput] = useState('')
  const [filteredInput, setFilteredInput] = useState([]);

  const searchFunc = (input) => {
      setSearchInput(input)
      const filteredData = puppyData.filter((item)=>{
          return Object.values(item).join('').toLowerCase.includes(searchInput.toLowerCase())
      })
      setFilteredInput(filteredData)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search: </label>
      <input type="text" onChange={(input) => searchFunc(input.target.value)} />
    </div>
  );
};

export default Searchbar;
