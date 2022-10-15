import React, { useState } from "react";
import Puppy from "./Puppy";

const AllPuppies = (props) => {
  const searchInput = props.searchInput;
  const filteredPuppies = props.filteredPuppies;
  const puppies = props.puppies;

  // const [isShown, setIsShown] = useState(false);
  // const handleClick = () => {
  //   setIsShown(true);
  //   function findPuppy() {
  //     <Puppy puppy={Puppy} />;
  //   }
  // };

  return <div className="allPuppies">puppy test</div>;
};

export default AllPuppies;
