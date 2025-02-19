import React from "react";
import { useDispatch, useSelector } from "react-redux";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.user;
  });
  console.log(data);
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <ul>
      {data.map((user, id) => (
        <li key={id}>
          {user}
          <button onClick={() => deleteUser(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayUsers;
