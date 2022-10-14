import React, { useState } from "react";

const Puppy = (props) => {
  const puppy = props.puppy;

  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  if (toggle) {
    return (
      <div key={`player-${puppy.id}`} className="puppy">
        <div id="puppyHeader">
          <span id="puppyName">Name: {puppy.name}</span>
          <span id="puppyId">ID: {puppy.id}</span>
        </div>
        <img src={puppy.imageUrl} />
        <button onClick={handleClick}>See Details</button>
      </div>
    );
  } else {
    return (
      <div key={`player-${puppy.id}`} className="puppyDetails">
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
        <button onClick={handleClick}>See Image</button>
      </div>
    );
  }
};

export default Puppy;

// {
//   return (
//      <div key={`player-${puppy.id}`} className="puppy">
//         <div id="puppyHeader">
//           <span id="puppyName">Name: {puppy.name}</span>
//           <span id="puppyId">ID: {puppy.id}</span>
//         </div>

// const [toggle, setToggle] = useState(true);
//  const handleClick = () => {
//   setToggle(!toggle);
//  };

//  if (toggle) {
//    return (
//      <div key={`player-${puppy.id}`} className="puppy">
//        <div id="puppyHeader">
//          <span id="puppyName">Name: {puppy.name}</span>
//          <span id="puppyId">ID: {puppy.id}</span>
//     </div>
//     <img src={puppy.imageUrl} />
//       <button id="detailsButton" onClick={handleClick}>
//         See Details
//       </button>
//     </div>
//    );
//  } else {
//    return (
//      <div key={`player-${puppy.id}`} className="puppyDetails">
//       <div>Name: {puppy.name}</div>
//       <div>ID: {puppy.id}</div>
//        <div>Breed: {puppy.breed}</div>
//        <div>Status: {puppy.status}</div>
//       <button id="detailsButton" onClick={handleClick}>
//          See Image
//       </button>
//     </div>
//    );
//  }
// }

{
  /* <div key={`player-${puppy.id}`} className="puppy">
<div id="puppyHeader">
  <span id="puppyName">Name: {puppy.name}</span>
  <span id="puppyId">ID: {puppy.id}</span>
</div>
<img src={puppy.imageUrl} />
<button onClick={handleClick}>See Details</button>
</div> */
}
