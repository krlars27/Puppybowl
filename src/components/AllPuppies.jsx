import React from "react";
import DetailsButton from "./DetailsButton";

const AllPuppies = (props) => {
  const MyPuppies = props.puppyData;
  return (
    <div className="allPuppies">
      {MyPuppies.length ? (
        MyPuppies.map((puppy) => {
          return (
            <div key={`player-${puppy.id}`} className="puppy">
              <div id="puppyHeader">
                <span id="puppyName">Name: {puppy.name}</span>
                <span id="puppyId">ID: {puppy.id}</span>
              </div>
              {/* <div>{puppy.breed}</div>
                    <div>{puppy.status}</div> */}
              <img src={puppy.imageUrl} />
              <DetailsButton />
              <button id="deleteButton">Delete From Roster</button>
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
