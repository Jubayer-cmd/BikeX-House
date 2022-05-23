import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import ManageOrdersRow from "./ManageOrdersRow";

const ManageOrder = () => {
  const {
    data: purchase,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://morning-castle-26727.herokuapp.com/purchase", {
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
      <Table responsive>
        <thead>
          <tr>
            <th>Number</th>
            <th>images</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>price</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {purchase.map((buy, index) => (
            <ManageOrdersRow
              key={buy._id}
              buy={buy}
              index={index}
              refetch={refetch}
            ></ManageOrdersRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrder;
