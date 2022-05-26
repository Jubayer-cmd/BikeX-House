import React from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Order = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("order", () =>
    fetch(`http://localhost:5000/purchase/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    const url = `https://morning-castle-26727.herokuapp.com/purchase/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleCancel = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete(id);
        swal("Poof! Your order has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your order is safe!");
      }
    });
  };
  return (
    <div className="text-center">
      <h1 className="text-primary my-3">My order:{orders.length}</h1>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((a, index) => (
            <tr key={a._id}>
              <th>{index + 1}</th>
              <td>
                <img src={a.image} width="50vw" alt="" />
              </td>
              <td>{a.name}</td>
              <td>{a.price}</td>
              <td>{a.quantity}</td>
              <td>
                {a.price && !a.paid && (
                  <Link to={`/dashboard/payment/${a._id}`}>
                    <button className="btn btn-xs btn-success">pay</button>
                  </Link>
                )}
                {a.price && a.paid && (
                  <div>
                    <p>
                      <span className="text-success">Paid</span>
                    </p>
                    <p>
                      Transaction id:{" "}
                      <span className="text-success">{a.transactionId}</span>
                    </p>
                  </div>
                )}
              </td>
              <td>
                {!a.paid ? (
                  <Button
                    className="bg-danger"
                    onClick={() => handleCancel(a._id)}
                  >
                    <i class="bi bi-trash"></i> Cancel
                  </Button>
                ) : (
                  <Button className="bg-danger" disabled="disabled">
                    <i class="bi bi-trash"></i> Cancel
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Order;
