import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import axiosPrivate from "./../../api/axiosPrivate";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const handleCancel = (id) => {};
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
                    onClick={() => handleShow(a._id)}
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
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={() => handleCancel()}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </Table>
    </div>
  );
};

export default Order;
