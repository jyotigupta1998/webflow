import React from "react";
import CompB from "./compB";
import CompC from "./compC";
import "../App.css";

export const userContext = React.createContext();
export const userContextA = React.createContext();

const CompA = () => {
  return (
    <div className="postion">
      <div className="main_div_postion">
        {/* <input type="text" placeholder="name" />
        <input type="text" placeholder="designation" />
        <button type="submit">submit</button> */}

        {/* <userContext.Provider value={"Context  A"}>
        <userContextA.Provider value={"context B"}> */}
        {/* <CompB /> */}
        {/* <CompC /> */}
        {/* </userContextA.Provider>
      </userContext.Provider> */}
      </div>
    </div>
  );
};

export default CompA;
