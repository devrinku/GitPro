import React, { useContext } from "react";
import GithubContext from "../context/github/githubContext";
import Repoitem from "./Repoitem";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  return (
    githubContext.repos.length > 0 && (
      <div className="container">
        <ul className="collection">
          {githubContext.repos.map((repo) => (
            <Repoitem key={repo.id} repo={repo} />
          ))}
        </ul>
      </div>
    )
  );
};

export default Repos;
