import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Useritem = ({ user }) => {
  const { avatar_url, login } = user;
  return (
    <div className="col s12 m4 card center  " style={{ padding: "20px" }}>
      <img
        src={avatar_url}
        style={{ width: "150px" }}
        className="circle"
        alt=""
      />
      <h6>{login}</h6>
      <Link
        to={`/user/${login}`}
        className="btn"
        style={{ backgroundColor: "#252727" }}>
        <i
          style={{ fontSize: "12px" }}
          className="fa fa-chevron-right right"></i>
        More
      </Link>
    </div>
  );
};
Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default Useritem;
