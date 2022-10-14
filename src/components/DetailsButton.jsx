import React, { useState } from "react";

const DetailsButton = (props) => {
  const puppyData = props.puppyData;

  return <button>See Details</button>;
};

export default DetailsButton;

// MyPuppies.map((puppy) => {
//     return (
//       <div key={`player-${puppy.id}`} className="puppy">
//         <div id="puppyHeader">
//           <span id="puppyName">Name: {puppy.name}</span>
//           <span id="puppyId">ID: {puppy.id}</span>
//         </div>

// const [toggle, setToggle] = useState(true);
// const handleClick = () => {
//   setToggle(!toggle);
// };

// if (toggle) {
//   return (
//     <div key={`player-${puppy.id}`} className="puppy">
//       <div id="puppyHeader">
//         <span id="puppyName">Name: {puppy.name}</span>
//         <span id="puppyId">ID: {puppy.id}</span>
//       </div>
//       <img src={puppy.imageUrl} />
//       <button id="detailsButton" onClick={handleClick}>
//         See Details
//       </button>
//     </div>
//   );
// } else {
//   return (
//     <div key={`player-${puppy.id}`} className="puppyDetails">
//       <div>Name: {puppy.name}</div>
//       <div>ID: {puppy.id}</div>
//       <div>Breed: {puppy.breed}</div>
//       <div>Status: {puppy.status}</div>
//       <button id="detailsButton" onClick={handleClick}>
//         See Image
//       </button>
//     </div>
//   );
// }
// };
