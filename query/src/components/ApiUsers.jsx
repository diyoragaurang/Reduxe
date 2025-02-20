import React from "react";
import { useGetUsersQuery } from "../features/dataSlice.js";

const ApiUsers = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <ul>
      {data?.users?.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
};

export default ApiUsers;
