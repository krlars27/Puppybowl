import React, { useState } from "react";

const Puppy = (props) => {
  const puppy = props.puppy;

  const [isShown, setIsShown]=useState(false)
  const handleClick = () => {
    setIsShown(false)
  }

  return (
    <div className="puppy">
      {puppy ? (
        <div>
          <div>Name: {puppy.name}</div>
          <div>ID: {puppy.id}</div>
          <div>Breed: {puppy.breed}</div>
          <div>Status: {puppy.status}</div>
          <div>Team ID: {puppy.teamId}</div>
          <div>Cohort ID: {puppy.cohortId}</div>
          <button onClick={handleClick} >See Picture</button>
        </div>
      ) : (
        <div>Loading Puppy...</div>
      )}
    </div>
  );
};

export default Puppy;

{
  /* <div>
        Team Members
        {puppy.team ? (
          puppy.team.players.map((teammate) => {
            return <Puppy puppy={teammate} />;
          })
        ) : (
          <div> This Puppy doesn't have a team yet</div>
        )}
      </div> */
}
