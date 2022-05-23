import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import ManageProdcutRows from "./ManageProdcutRows";
const ManageProducts = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/parts", {
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
      <h1>Manage product</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Number</th>
            <th>images</th>
            <th>Name</th>
            <th>Description</th>
            <th>price</th>
            <th>Minimum Quantity</th>
            <th>Available Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part, index) => (
            <ManageProdcutRows
              key={part._id}
              part={part}
              index={index}
              refetch={refetch}
            ></ManageProdcutRows>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProducts;
