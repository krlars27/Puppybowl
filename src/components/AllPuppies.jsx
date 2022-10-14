import React, { useState } from "react";
import Puppy from "./Puppy";

const AllPuppies = (props) => {
  const puppyData = props.puppyData;

  return (
    <div className="allPuppies">
      {puppyData.length ? (
        puppyData.map((puppy) => {
          return  <div key={`player-${puppy.id}`} className="puppy">
          <div id="puppyHeader">
            <span id="puppyName">Name: {puppy.name}</span>
            <span id="puppyId">ID: {puppy.id}</span>
          </div>
          <img src={puppy.imageUrl} />
          {/* <Link to="/Puppy">See Details</Link>  */}
          <button  puppy = {puppy}>See Details</button>
        </div>;
        })
      ) : (
        <div>Loading the Cutest Puppies...</div>
      )}
    </div>
  );
};

export default AllPuppies;
