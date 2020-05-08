import React, { useContext, Fragment } from "react";
import { useEffect } from "react";
import GithubContext from "../context/github/githubContext";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import Repos from "../repos/Repos";

const Userinfo = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getSingleUser, getUserRepos, singleUser, loading } = githubContext;
  useEffect(() => {
    getSingleUser(match.params.name);
    getUserRepos(match.params.name);
    // eslint-disable-next-line
  }, []);
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = singleUser;
  if (loading) {
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div
          className="container"
          style={{ display: "flex", marginTop: "30px", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              background: "#393a3a",

              marginRight: "20px",
              color: "white",
            }}
            className="btn btn-flat">
            <i className="fa fa-chevron-left left"></i>
            Back to Search
          </Link>
          <h5>
            Hireable :{" "}
            <i
              className={
                hireable
                  ? "fa fa-check teal-text"
                  : "fa fa-times-circle teal-text"
              }></i>
          </h5>
        </div>
        <div className="container">
          <div className="row card">
            <div className="col s12 m6 center">
              <div className="card-content">
                <img
                  src={avatar_url}
                  style={{ width: "180px" }}
                  className="circle"
                  alt=""
                />
                <h5>{login}</h5>
                <h5>Location : {location} </h5>
              </div>
            </div>
            <div className="col s12 m6">
              {bio && (
                <div className="card-content">
                  <Fragment>
                    <h5>Bio</h5>
                    <p style={{ fontSize: "16px" }}>{bio}</p>
                  </Fragment>
                </div>
              )}
              <div className="card-action ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn "
                  style={{ background: "#393a3a" }}
                  href={html_url}>
                  <i className="fa fa-paper-plane right"></i>
                  Visit Github Profile
                </a>
              </div>
              <div className="card-content" style={{ paddingTop: "0px" }}>
                {login && (
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "650",
                    }}>
                    Username :{" "}
                    <span style={{ fontSize: "16px", fontWeight: "400" }}>
                      {name}
                    </span>
                  </p>
                )}

                {company && (
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "650",
                    }}>
                    Company :{" "}
                    <span style={{ fontSize: "16px", fontWeight: "400" }}>
                      {company}
                    </span>
                  </p>
                )}

                {blog && (
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "650",
                    }}>
                    Website :{" "}
                    <span style={{ fontSize: "16px", fontWeight: "400" }}>
                      {blog}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="card ">
            <div className="card-content">
              <div className="row">
                <div className="col s12 m3">
                  <span className="red" style={stylebadge}>
                    Followers : {followers}
                  </span>
                </div>
                <div className="col s12 m3">
                  <span className="green" style={stylebadge}>
                    Followings : {following}
                  </span>
                </div>
                <div className="col s12 m3">
                  <span className="grey" style={stylebadge}>
                    Public Repos : {public_repos}
                  </span>
                </div>
                <div className="col s12 m3">
                  <span className="grey darken-4" style={stylebadge}>
                    Public Gists : {public_gists}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Repos />
      </Fragment>
    );
  }
};
const stylebadge = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  borderRadius: "20px",
  marginBottom: "10px",
  color: "white",
};

export default Userinfo;
