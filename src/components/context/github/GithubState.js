import React, { useReducer } from "react";
import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext";
import {
  GET_REPOS,
  SET_USERS,
  SET_SINGLE_USER,
  CLEAR_ALL,
  SET_LOADING,
  SET_PATH,
} from "../types";
import axios from "axios";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_Secret;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_Secret;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    singleUser: {},
    repos: [],
    loading: false,
    path: "",
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //////////Get Users
  const getUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SET_USERS,
      payload: res.data.items,
    });
  };
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  /////////////////Get SingleUser
  const getSingleUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SET_SINGLE_USER,
      payload: res.data,
    });
  };
  /////////////////Get  Repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };
  /////////////////Clear All USers
  const clearAll = () => dispatch({ type: CLEAR_ALL });
  //////////////////Change Path
  const pathChanger = (route) => dispatch({ type: SET_PATH, payload: route });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        singleUser: state.singleUser,
        repos: state.repos,
        loading: state.loading,
        path: state.path,
        getUsers,
        clearAll,
        getSingleUser,
        getUserRepos,
        pathChanger,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
