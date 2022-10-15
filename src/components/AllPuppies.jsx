import React, { useState } from "react";
import Puppy from "./Puppy";

const AllPuppies = (props) => {
  const filteredPuppies = props.filteredResults;
  const searchInput = props.searchInput

// const [isShown, setIsShown] = useState(false);
// const handleClick = () => {
//   setIsShown(true);
//   function findPuppy() {
//     <Puppy puppy={Puppy} />;
//   }
// };

  return (
    <div className="allPuppies">
      {searchInput.length > 1 ? (
        filteredPuppies.map((puppy) => {
          return (
            <div key={`player-${puppy.id}`} className="puppy">
              <div id="puppyHeader">
                <span id="puppyName">Name: {puppy.name}</span>
                <span id="puppyId">ID: {puppy.id}</span>
              </div>
              <img src={puppy.imageUrl} />
              {/* <button
                onClick={
                  () => props.filteredPuppies(props.puppy.findPuppy)
                  // ok so the button is registering something, but it's still coming back undefined. But this is probably the right direction?
                }
                >
                See Details
              </button> */}
              {/* <Puppy/> */}
            </div>
          );
        })
      ) : (
        <div>Loading the Cutest Puppies...</div>
        )}
    </div>
  );
};

export default AllPuppies;

