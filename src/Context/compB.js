import React from "react";
import { userContext, userContextA } from "./compA";

const CompB = () => {
  return (
    <userContext.Consumer>
      {(user) => {
        return (
          <userContextA.Consumer>
            {(v) => {
              return (
                <div>
                  {" "}
                  learing {user} {v}
                </div>
              );
            }}
          </userContextA.Consumer>
        );
      }}
    </userContext.Consumer>
  );
};

export default CompB;


// disdvantages of context :-
// 1.Complexity and Nesting: 
// 2.Coupling Components: 
// 3.Performance Impact: 
// 4.Debugging Complexity: