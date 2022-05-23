import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const ManageProdcutRows = ({ part, index, refetch }) => {
  const {
    _id,
    name,
    image,
    description,
    minimumQuantity,
    availableQuantity,
    price,
  } = part;
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate("/dashboard/addProduct");
  };
  const handleDelete = (id) => {
    const url = `http://localhost:5000/parts/${id}`;
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
      <td>{description}</td>
      <td>{price}</td>
      <td>{minimumQuantity}</td>
      <td>{availableQuantity}</td>
      <td>
        <Button className="btn-primary" onClick={navigateToProduct}>
          <i class="bi bi-cart"></i> ADD
        </Button>
      </td>
      <td>
        <Button className="btn-danger" onClick={() => handleDeleteOrder(_id)}>
          <i class="bi bi-trash"></i> Delete
        </Button>
      </td>
    </tr>
  );
};

export default ManageProdcutRows;
