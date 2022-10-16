import React from "react";
import PuppyCard from "./PuppyCard";

const SearchResult = (props) => {
  const filteredPuppies = props.filteredPuppies;
  const puppyArray = props.puppyArray;

  return (
    <div>
      <div className="allPuppies">
        {filteredPuppies.length > 0
          ? filteredPuppies.map((puppy) => {
              return (
                <div key={`player-${puppy.id}`} className="puppy">
                  <div id="puppyHeader">
                    <span id="puppyName">Name: {puppy.name}</span>
                    <span id="puppyId">ID: {puppy.id}</span>
                  </div>
                  <img src={puppy.imageUrl} />
                </div>
              );
            })
          : puppyArray.map((puppy) => {
              return (
                <div key={`player-${puppy.id}`} className="puppy">
                  <div id="puppyHeader">
                    <span id="puppyName">Name: {puppy.name}</span>
                    <span id="puppyId">ID: {puppy.id}</span>
                  </div>
                  <img src={puppy.imageUrl} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SearchResult;

// return <div>
// <p>I am search result</p>
// <div className="allPuppies">
//     {searchInput.length > 1
//       ? filteredPuppies.map((puppy) => {
//           return (
//             <div key={`player-${puppy.id}`} className="puppy">
//               <div id="puppyHeader">
//                 <span id="puppyName">Name: {puppy.name}</span>
//                 <span id="puppyId">ID: {puppy.id}</span>
//               </div>
//               <img src={puppy.imageUrl} />
//             </div>
//           );
//         })
//       : puppyArray.map((puppy) => {
//           return (
//             <div key={`player-${puppy.id}`} className="puppy">
//               <div id="puppyHeader">
//                 <span id="puppyName">Name: {puppy.name}</span>
//                 <span id="puppyId">ID: {puppy.id}</span>
//               </div>
//               <img src={puppy.imageUrl} />
//             </div>
//           );
//         })}
//   </div>
// <PuppyCard/>
// </div>

// {
//   searchInput.length > 1
//     ? filteredPuppies.map((puppy) => {
//         return (
//           <div key={`player-${puppy.id}`} className="puppy">
//             <div id="puppyHeader">
//               <span id="puppyName">Name: {puppy.name}</span>
//               <span id="puppyId">ID: {puppy.id}</span>
//             </div>
//             <img src={puppy.imageUrl} />
//           </div>
//         );
//       })
//     : puppyArray.map((puppy) => {
//         return (
//           <div key={`player-${puppy.id}`} className="puppy">
//             <div id="puppyHeader">
//               <span id="puppyName">Name: {puppy.name}</span>
//               <span id="puppyId">ID: {puppy.id}</span>
//             </div>
//             <img src={puppy.imageUrl} />
//           </div>
//         );
//       });
// }

// filteredPuppies.map((puppy) => {
//   return (
//     <div key={`player-${puppy.id}`} className="puppy">
//       <div id="puppyHeader">
//         <span id="puppyName">Name: {puppy.name}</span>
//         <span id="puppyId">ID: {puppy.id}</span>
//       </div>
//       <img src={puppy.imageUrl} />
//     </div>
//   );
// });

// puppyArray.map((puppy) => {
//   return (
//     <div key={`player-${puppy.id}`} className="puppy">
//       <div id="puppyHeader">
//         <span id="puppyName">Name: {puppy.name}</span>
//         <span id="puppyId">ID: {puppy.id}</span>
//       </div>
//       <img src={puppy.imageUrl} />
//     </div>
//   );
// });

{
  /* <PuppyCard searchInput = {searchInput} filteredPuppies={filteredPuppies} puppyArray={puppyArray}/> */
}

//   if (searchInput > 1) {
//     filteredPuppies.map((puppy) => {
//       return (
//         <div key={`player-${puppy.id}`} className="puppy">
//           <div id="puppyHeader">
//             <span id="puppyName">Name: {puppy.name}</span>
//             <span id="puppyId">ID: {puppy.id}</span>
//           </div>
//           <img src={puppy.imageUrl} />
//         </div>
//       );
//     });
//   } else {
//     puppyArray.map((puppy) => {
//       return (
//         <div key={`player-${puppy.id}`} className="puppy">
//           <div id="puppyHeader">
//             <span id="puppyName">Name: {puppy.name}</span>
//             <span id="puppyId">ID: {puppy.id}</span>
//           </div>
//           <img src={puppy.imageUrl} />
//         </div>
//       );
//     });
//   }
