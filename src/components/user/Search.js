import React, { useState, useContext, Fragment } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";
import Spinner from "../layouts/Spinner";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { loading, getUsers } = githubContext;
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    if (text === "") {
      alertContext.setAlert("Please enter the name of user...!!!", "btnn");
    } else {
      getUsers(text);
      setText("");
    }
  };
  if (loading) {
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    );
  } else {
    return (
      <div className="container">
        <div className="input-field" style={{ marginTop: "50px" }}>
          <label htmlFor="id">Enter User</label>
          <input onChange={onChange} value={text} type="text" id="input" />
          <button
            style={{
              display: "block",
              marginTop: "20px",
              marginBottom: "20px",
              width: "100%",
            }}
            onClick={onClick}
            className="btn waves-effect">
            Serach User
          </button>
        </div>
      </div>
    );
  }
};

export default Search;
