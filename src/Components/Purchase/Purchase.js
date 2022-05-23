import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [parts, setParts] = useState({});
  const [activityChanged, setActivityChanged] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [id]);
  const {
    _id,
    name,
    image,
    description,
    minimumQuantity,
    availableQuantity,
    price,
  } = parts;

  const handleBuy = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    if (
      parseInt(quantity) > parseInt(availableQuantity) ||
      parseInt(quantity) < parseInt(minimumQuantity)
    ) {
      setActivityChanged(true);
      toast.error(
        "Quantity should be bigger then minimum quantity and less than available quantity"
      );
    } else {
      const quantity = event.target.quantity.value;
      const userName = event.target.name.value;
      const phone = event.target.phone.value;
      const email = event.target.email.value;
      const address = event.target.address.value;
      const buy = {
        partsId: _id,
        name: name,
        image: image,
        description: description,
        quantity: quantity,
        price: price,
        userName: userName,
        email: email,
        phone: phone,
        address: address,
      };
      console.log(buy);
      fetch("http://localhost:5000/purchase", {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(buy),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Place order successfully!");
          }
        });
    }
  };
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="card mb-3 shadow" style={{ width: "800px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={image} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Price: {price}</ListGroupItem>
                <ListGroupItem>
                  Minimum purchase Quantity: {minimumQuantity}
                </ListGroupItem>
                <ListGroupItem>
                  Available Quantity: {availableQuantity}
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>

          <div className="w-75 mx-auto">
            <form className="text-center m-2" onSubmit={handleBuy}>
              <h1 className="text-primary">Checkout</h1>
              <input
                className=" w-100 mb-2 p-2"
                type="text"
                name="name"
                value={user?.displayName}
                placeholder="UserName"
                required
              />{" "}
              <br />
              <input
                className=" w-100 mb-2 p-2"
                type="email"
                name="email"
                value={user.email}
                readOnly
              />{" "}
              <br />
              <input
                className=" w-100 mb-2 p-2"
                type="text"
                name="address"
                id=""
                placeholder="Address"
                required
              />{" "}
              <br />
              <input
                className=" w-100 mb-2 p-2"
                type="number"
                name="phone"
                id=""
                placeholder="Phone"
                required
              />{" "}
              <br />
              <input
                className=" w-100 mb-2 p-2"
                type="number"
                name="quantity"
                id=""
                placeholder="Quantity"
                required
              />{" "}
              <br />
              <input
                className=" w-100 mb-2 bg-primary text-white border-0 p-2 rounded "
                type="submit"
                value="Buy"
                disabled={activityChanged}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
