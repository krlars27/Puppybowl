import React, { useState } from "react";

const PuppyCard = (props) => {
  const searchInput = props.setSearchInput;
  const filteredPuppies = props.filteredPuppies;
  const puppyArray = props.puppyArray;


  return (
    <div>
      <p>I am puppy card</p>
    </div>
  );
};

export default PuppyCard;
