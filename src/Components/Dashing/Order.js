import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import axiosPrivate from "./../../api/axiosPrivate";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/purchase?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/purchase/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = orders.filter((service) => service._id !== id);
        setOrders(remaining);
      });
  };

  const handleCancel = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete(id);
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
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
