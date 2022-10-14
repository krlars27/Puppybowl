import React, { useState } from "react";
import Puppy from "./Puppy";

const AllPuppies = (props) => {
  const puppyData = props.puppyData;

  return (
    <div className="allPuppies">
      {puppyData.length ? (
        puppyData.map((puppy) => {
          return <Puppy puppy={puppy} />;
        })
      ) : (
        <div>Loading the Cutest Puppies...</div>
      )}
    </div>
  );
};

export default AllPuppies;
