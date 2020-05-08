import React from "react";
import spinner from "../layouts/spinner.gif";

const Spinner = () => {
  return (
    <div className="center" style={{ marginTop: "20px" }}>
      <img style={{ width: "130px" }} src={spinner} alt="Loading" />
    </div>
  );
};

export default Spinner;
