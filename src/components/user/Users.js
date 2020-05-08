import React, { useContext } from "react";
import GithubContext from "../context/github/githubContext";
import Useritem from "./Useritem";

const Users = () => {
  const githubContext = useContext(GithubContext);

  return (
    <div className="container">
      <div className="row">
        {githubContext.users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
