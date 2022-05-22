import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const {
    _id,
    name,
    image,
    description,
    minimumQuantity,
    availableQuantity,
    price,
  } = product;
  const navigate = useNavigate();
  const navigateToPartsDetail = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <Card className="shadow" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Price: {price}</ListGroupItem>
        <ListGroupItem>Available Quantity: {availableQuantity}</ListGroupItem>
        <ListGroupItem>Minimum Quantity: {minimumQuantity}</ListGroupItem>
      </ListGroup>
      <Card.Body className="text-center">
        <Button onClick={() => navigateToPartsDetail(_id)}>Update</Button>
      </Card.Body>
    </Card>
  );
};

export default Products;
