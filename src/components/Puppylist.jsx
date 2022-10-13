import React, { useEffect, useState } from "react";

const fetchPuppyData = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      let response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      let puppyData = await response.json();
      setData(puppyData);
    }
    getData();
  }, []);
  // return (
  //   <div className="puppy" >{data ? data.body : 'Loading data'}</div>
  // )
};

const Puppylist = () => {
  return (
    <div>
      <h2>I am Puppylist</h2>
      <div id="puppies">
        <div className="puppy">
          {data ? data.body : "Loading data"}
          {fetchPuppyData}
        </div>
        {/* <p>Puppy Name</p>
        <p>Puppy Id</p> */}
        {/* <img src="puppy1.jpeg" alt="" /> */}
        {/* <button>See Details</button>
      <button>Delete from Roster</button> */}
      </div>
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
