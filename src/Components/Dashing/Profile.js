import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [list, setlist] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const reviews = {};
    // console.log(reviews);
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Profile update successfully!");
        } else {
          toast.error("Fail to update profile!");
        }
      });
  };
  return (
    <div className="mx-auto">
      <h1 className="text-center text-primary">Your Profile</h1>
      <div className="w-75">
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            UserName: {user.displayname || "no value"}
          </ListGroupItem>
          <ListGroupItem>Email: {user.email}</ListGroupItem>
          <ListGroupItem>Education:{user?.education}</ListGroupItem>
          <ListGroupItem>Phone:{user?.phone}</ListGroupItem>
          <ListGroupItem>Location:{user?.location}</ListGroupItem>
          <ListGroupItem>Linkedin:{user?.linkedin}</ListGroupItem>
          <ListGroupItem>About:{user?.about}</ListGroupItem>
        </ListGroup>
        <Button className="mx-auto" onClick={() => setlist(true)}>
          Update
        </Button>
      </div>
      {list && (
        <div>
          <form onSubmit={handleSubmit} className="w-75 border-1 text-center">
            <input
              className="rounded w-100 p-2 m-2"
              type="text"
              name="education"
              id=""
              placeholder="Education"
              required
            />{" "}
            <br />
            <input
              className="rounded w-100 p-2 m-2"
              type="text"
              name="location"
              id=""
              placeholder="Location"
              required
            />
            <br />
            <input
              className="rounded w-100  p-2 m-2"
              type="text"
              name="phone"
              id=""
              placeholder="Phone"
              required
            />
            <br />
            <input
              className="rounded w-100  p-2 m-2"
              type="text"
              name="linkedin"
              id=""
              placeholder="Linkedin link"
              required
            />
            <br />
            <input
              className="rounded w-100  p-2 m-2"
              type="text"
              name="about"
              id=""
              placeholder="About yourself"
              required
            />{" "}
            <br />
            <input
              className="border-0 bg-primary text-white rounded p-2 m-2"
              type="submit"
              value="Submit"
            />
            <Button className="btn-danger" onClick={() => setlist(false)}>
              Cancel
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
