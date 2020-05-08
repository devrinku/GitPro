import React from "react";
import PropTypes from "prop-types";

const Repoitem = ({ repo: { name, html_url } }) => {
  return (
    <li style={{ lineHeight: "2.5rem" }} className="collection-item">
      <a
        rel="noopener noreferrer"
        target="_blank"
        style={{ fontSize: "18px", color: "#26a69a" }}
        href={html_url}>
        {name}
      </a>
    </li>
  );
};
Repoitem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default Repoitem;
