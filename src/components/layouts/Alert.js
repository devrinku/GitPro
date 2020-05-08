import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className="container">
        <div
          style={{
            display: "flex",
            padding: "10px",
            color: "white",
            fontSize: "23px",
            marginTop: "20px",
          }}
          className={alert.type}>
          <span>
            {" "}
            <i
              style={{ marginRight: "23px", fontSize: "23px" }}
              className="fa fa-info-circle"></i>
            {alert.msg}
          </span>
        </div>
      </div>
    )
  );
};

export default Alert;
