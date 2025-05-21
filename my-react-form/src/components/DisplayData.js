import React from "react";
import { useLocation } from "react-router-dom";

const DisplayData = () => {
  const { state } = useLocation();

  return (
    <div>
      <h2>Submitted Data</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default DisplayData;
