import React, { useContext } from "react";
import GithubContext from "../context/github/githubContext";

const ClearUsers = () => {
  const githubContext = useContext(GithubContext);
  const onClick = () => {
    githubContext.clearAll();
  };
  return (
    githubContext.users.length > 0 && (
      <div className="container">
        <button
          style={{
            display: "block",
            background: "#393a3a",
            width: "100%",
          }}
          onClick={onClick}
          className="btn">
          Clear Users
        </button>
      </div>
    )
  );
};

export default ClearUsers;
