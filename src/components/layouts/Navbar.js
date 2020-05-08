import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../context/github/githubContext";

const Navbar = () => {
  const githubContext = useContext(GithubContext);
  const { pathChanger, path } = githubContext;
  useEffect(() => {
    pathChanger("home");
    // eslint-disable-next-line
  }, []);
  const onClick = (route) => {
    pathChanger(route);
  };
  return (
    <Fragment>
      <nav className="teal">
        <div className="nav-wrapper">
          <Link
            onClick={() => onClick("home")}
            to="/"
            style={{ fontSize: "30px", fontWeight: "500", marginLeft: "70px" }}
            className="brand-logo left">
            <i style={{ fontSize: "40px" }} className="material-icons">
              how_to_reg
            </i>
            GitPro
          </Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li className={path === "home" ? "active" : " "}>
              <Link
                onClick={() => onClick("home")}
                style={{ fontSize: "18px", fontWeight: "400" }}
                to="/">
                Home
                <i style={{ fontSize: "25px" }} className="fa fa-home left"></i>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "18px",

                  display: "flex",
                  fontWeight: "400",
                }}
                href="https://github.com/session">
                <i
                  style={{ fontSize: "25px" }}
                  className="fa fa-github left"></i>
                SignUp/Login
              </a>
            </li>
            <li
              style={{ marginRight: "70px" }}
              className={path === "about" ? "active" : " "}>
              <Link
                onClick={() => onClick("about")}
                style={{
                  fontSize: "18px",

                  fontWeight: "400",
                }}
                to="/about">
                About
                <i
                  style={{ fontSize: "25px" }}
                  className="fa fa-code-fork left"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li className={path === "home" ? "active" : " "}>
          <Link
            onClick={() => onClick("home")}
            style={{ fontSize: "18px", fontWeight: "400" }}
            to="/">
            Home
            <i style={{ fontSize: "25px" }} className="fa fa-home left"></i>
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "18px",

              display: "flex",
              fontWeight: "400",
            }}
            href="https://github.com/session">
            <i style={{ fontSize: "25px" }} className="fa fa-github left"></i>
            SignUp/Login
          </a>
        </li>
        <li className={path === "about" ? "active" : " "}>
          <Link
            onClick={() => onClick("about")}
            style={{
              fontSize: "18px",

              fontWeight: "400",
            }}
            to="/about">
            About
            <i
              style={{ fontSize: "25px" }}
              className="fa fa-code-fork left"></i>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
