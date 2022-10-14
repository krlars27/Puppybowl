import React, { useState } from "react";

const Puppy = (props) => {
  const puppy = props.puppy;

  return (
    <div key={`playerInfo-${puppy.id}`} className="puppyDetails">
      <div>Name: {puppy.name}</div>
      <div>ID: {puppy.id}</div>
      <div>Breed: {puppy.breed}</div>
      <div>Status: {puppy.status}</div>
      <div>Team ID: {puppy.teamId}</div>
      <div>Cohort ID: {puppy.cohortId}</div>
      <div>
        Team Members
        {puppy.team ? (
          puppy.team.players.map((teammate) => {
            return <Puppy puppy={teammate} />;
          })
        ) : (
          <div> This Puppy doesn't have a team yet</div>
        )}
      </div>
    </div>
  );
};

export default Puppy;


