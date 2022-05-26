import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const UserRow = ({ user }) => {
  const { username, email, image, review, rating } = user;
  return (
    <div>
      <Card className="shadow" style={{ width: "20rem" }}>
        <img
          className="mx-auto circle"
          src={
            image ||
            "https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
          }
          alt=""
          width={"200px"}
        />
        <ListGroup className="list-group-flush">
          <ListGroupItem>UserName: {username || "no value"}</ListGroupItem>
          <ListGroupItem>Email: {email}</ListGroupItem>
          <ListGroupItem>Ratings:⭐{rating}</ListGroupItem>
        </ListGroup>
        <Card.Body className="text-center">
          <Card.Text>{review}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserRow;
