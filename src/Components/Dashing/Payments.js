import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L3h5BLYfK2WiSoMhQPKX42Qb6RAVciI8azz2t1mdxxpwBLhXeyZXpjeDiHUMBWPvq89MOaob83AZl7inKpXTSxR00UGOnoE6g"
);
const Payments = () => {
  const { id } = useParams();
  const { data: Payment, isLoading } = useQuery("payments", () =>
    fetch(`http://localhost:5000/purchase/${id}`, {
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
      <h1>
        Payment for <span className="text-primary">{id}</span>
      </h1>

      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Name:{Payment.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Price:{Payment.price}
          </Card.Subtitle>
          <Card.Text>Quantity:{Payment.quantity}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Elements stripe={stripePromise}>
            <CheckoutForm Payment={Payment} />
          </Elements>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Payments;
