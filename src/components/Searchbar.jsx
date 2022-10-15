import React, { useState } from "react";
import AllPuppies from "./AllPuppies";

const Searchbar = (props) => {
  //Grabs data from main page
  const puppies = props.puppyData;
  //Sets initial state of the search bar (search bar is set to empty string)
  const [searchInput, setSearchInput] = useState("");
  //Sets initial state of filtered puppies (in this case it's not filtering puppy object)
  const [filteredPuppies, setFilteredPuppies] = useState([]);

  //When you add input to the search bar, it sets the value of searchPuppy to that input
  //I'm not sure if preventDefault should be there, but it was in the example in class
  const handleChange = (e) => {
    // e.preventDefault();
    searchPuppy(e.target.value);
  };

  const searchPuppy = (searchValue) => {
    //passes the searchValue
    setSearchInput(searchValue);
    //if searchInput is not empty, it takes the input
    if (searchInput !== "") {
      //filters all the puppy to a specific puppy
      const filteredData = puppies.filter((puppy) => {
        //goes through all the objects of the puppy
        return (
          Object.values(puppy)
            //concatenates them into a string
            .join("")
            //converts the concatenation into a lower case string
            .toLowerCase()
            //compares it to the lower case version of the searchInput
            .includes(searchInput.toLowerCase())
        );
      });

      setFilteredPuppies(filteredData);
      //If searchInput is empty, displays entire puppy list
    } else {
      setFilteredPuppies(puppies);
    }
  };
//Im not sure how to separate the search results from the search input which is why the return is so long.
//If I try to set puppies, searchInput, and filteredPuppies as a prop (see line 82-86) it's not detected in the AllPuppies.jsx file even if it's not a parent-child relationship.
//Technically the Searchbar and AllPuppies are only siblings with each other so it should've worked?
//Everything from line 52-81 should've been in the AllPuppies.jsx file.
  return (
    <div className="searchBar">
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} />
      <div className="allPuppies">
        {searchInput.length > 1
          ? //If searchInput has more than one chr, it displays filtered puppies
          //The return wont work on numbers though since the number is coerced to a string when all the values were joined. The number string was not coerced back into a number.
          //So if you try to put in the puppy ID in the search bar, it messes up. The names work perfectly fine though, even the breed and bench status.
          //And that's good enough to meet Fullstack's criteria lol.
            filteredPuppies.map((puppy) => {
              return (
                <div key={`player-${puppy.id}`} className="puppy">
                  <div id="puppyHeader">
                    <span id="puppyName">Name: {puppy.name}</span>
                    <span id="puppyId">ID: {puppy.id}</span>
                  </div>
                  <img src={puppy.imageUrl} />
                </div>
              );
            })
          : //If searchInput is 1 chr or less, it shows complete list of puppies
            puppies.map((puppy) => {
              return (
                <div key={`player-${puppy.id}`} className="puppy">
                  <div id="puppyHeader">
                    <span id="puppyName">Name: {puppy.name}</span>
                    <span id="puppyId">ID: {puppy.id}</span>
                  </div>
                  <img src={puppy.imageUrl} />
                </div>
              );
            })}
      </div>
      {/* <AllPuppies
        input={searchInput}
        filteredPuppies={filteredPuppies}
        puppies={puppies}
      /> */}
    </div>
  );
};

export default Searchbar;
