import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";
const Users = () => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>Total user:{user.length}</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Number</th>
            <th>E-mail</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((use, index) => (
            <UserRow
              key={use._id}
              use={use}
              index={index}
              refetch={refetch}
            ></UserRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
