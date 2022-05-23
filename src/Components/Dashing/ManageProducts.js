import React from "react";
import { Table } from "react-bootstrap";
import useParts from "../Hooks/useParts";
import ManageProdcutRows from "./ManageProdcutRows";

const ManageProducts = () => {
  const [parts, setParts] = useParts[{}];
  return (
    <div>
      <h1>Manage product</h1>
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
          {parts.map((part, index) => (
            <ManageProdcutRows
              key={part._id}
              part={part}
              index={index}
              setParts={setParts}
            ></ManageProdcutRows>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProducts;
