import React from "react";
import { Details } from "./";

const Puppylist = (props) => {
  const MyPuppies = props.puppyData;
  return (
    <div className="PuppyBox">
      {MyPuppies.length ? (
        MyPuppies.map((puppy) => {
          return (
            <div key={`player-${puppy.id}`} className="puppy">
              <div>{puppy.name}</div>
              <div>{puppy.id}</div>
              {/* <div>{puppy.breed}</div>
                    <div>{puppy.status}</div> */}
              <img src={puppy.imageUrl} />
              <Details />
              {/* <button id="detailButton">See Details</button> */}
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

export default Puppylist;

//   const response = await fetch(
//     'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players'
//   );
//   const result = await response.json();
//   console.log(result);
//  catch (err) {
//   console.error(err);
// }
