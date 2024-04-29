import React, { useContext } from "react";
import { userContext, userContextA } from "./compA";

const CompC = () => {
    debugger
  const A = useContext(userContext);
  const B = useContext(userContextA);
  return <div>{A}-{B}</div>;
};

export default CompC;
