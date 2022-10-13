import React from "react";

    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players'
    );
    const result = await response.json();
    console.log(result);
   catch (err) {
    console.error(err);
  }
const Puppylist = () => {
  return (
    <div>
      <h2>I am Puppylist</h2>
      <div id="puppies">
        <p>Puppy Name</p>
        <p>Puppy Id</p>
        <img src="puppy1.jpeg" alt="" />
      <button>See Details</button>
      <button>Delete from Roster</button>
      </div>
    </div>
  );
};

export default Puppylist;
