import React, { useState } from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";

const ManageOrdersRow = ({ buy, index, refetch }) => {
  const [ship, setShip] = useState(false);
  const { _id, image, name, quantity, price, email, paid } = buy;
  console.log(buy);

  const handleDelete = (id) => {
    const url = `https://morning-castle-26727.herokuapp.com/purchase/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleDeleteOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete(id);
        swal("Poof! User has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your cancel the delete!");
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img src={image} width="50vw" alt="" />
      </td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{email}</td>
      <td>
        {!paid && (
          <Button className="btn-danger" onClick={() => handleDeleteOrder(_id)}>
            <i class="bi bi-trash"></i> Cancel
          </Button>
        )}
        {ship && <p className="text-success">Shipped</p>}
      </td>
      <td>{paid && <Button onClick={() => setShip(true)}>pending</Button>}</td>
    </tr>
  );
};

export default ManageOrdersRow;
