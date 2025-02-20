import React, { useState } from "react";
import { useGetUsersQuery } from "../apiReducers/userApiReducer";

const PaginatedUsers = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetUsersQuery(page);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h2>Paginated User List</h2>
      <ul>
        {data?.users?.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span> Page {page} </span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default PaginatedUsers;
