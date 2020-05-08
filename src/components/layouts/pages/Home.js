import React, { Fragment } from "react";
import Search from "../../../components/user/Search";
import Alert from "../Alert";
import Users from "../../user/Users";
import ClearUsers from "../ClearUsers";

const Home = () => {
  return (
    <Fragment>
      <Alert />
      <Search />
      <ClearUsers />
      <Users />
    </Fragment>
  );
};

export default Home;
