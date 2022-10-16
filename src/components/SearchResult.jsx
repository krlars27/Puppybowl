import React from "react";
import PuppyCard from "./PuppyCard";

const SearchResult = (props) => {
  const puppies = props.puppies;

  return (
    <div>
      <div className="allPuppies">
        {puppies.map((puppy) => {
          return <PuppyCard key={`player-${puppy.id}`} puppy={puppy}/>;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
