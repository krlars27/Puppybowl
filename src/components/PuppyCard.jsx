import React, { useState } from "react";

const PuppyCard = (props) => {
  const puppy = props.puppy;

  const [displayDetails, setDisplayDetails] = useState(false);
  const handleClick = () => {
    setDisplayDetails(!displayDetails);
  };

  if (displayDetails) {
    return (
      <div className="puppyDetails">
        <div>Name: {puppy.name}</div>
        <div>ID: {puppy.id}</div>
        <div>Breed: {puppy.breed}</div>
        <div>Status: {puppy.status}</div>
        <div>Team ID: {puppy.teamId}</div>
        <div>Cohort ID: {puppy.cohortId}</div>
        <button onClick={handleClick}>See Image</button>
      </div>
    );
  } else {
    return (
      <div className="puppy">
        <div id="puppyHeader">
          <span id="puppyName">Name: {puppy.name}</span>
          <span id="puppyId">ID: {puppy.id}</span>
        </div>
        <img src={puppy.imageUrl} />
        <button onClick={handleClick}>See Details</button>
      </div>
    );
  }
};

export default PuppyCard;
