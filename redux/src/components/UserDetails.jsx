import React from "react";
import { useDispatch } from "react-redux";

import { fakeUserData } from "../api/index";
import { addUser } from "../store/slices/UserSlice";

import DisplayUsers from "./DisplayUsers";


const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  return (
    <>
      <div>
        <h1>UserDetails</h1>
      </div>
      <input type="text" placeholder="Enter User Name" />
      <button onClick={() => addNewUser(fakeUserData())}>Add User</button>
      <ul>
        <DisplayUsers />
      </ul>
      <hr />
    </>
  );
};

export default UserDetails;
