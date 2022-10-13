import React from "react";

const Puppylist = (props) => {
  const puppyData = props.puppyData
  console.log (puppyData)
  return <div>I am puppylist component</div>;
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
