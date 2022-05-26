import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Profile = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [list, setlist] = useState(false);

  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/profile/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const education = event.target.education.value;
    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value;
    const about = event.target.about.value;
    const profile = {
      name: name,
      location: location,
      phone: phone,
      linkedin: linkedin,
      about: about,
      education: education,
    };
    // console.log(reviews);
    fetch(`http://localhost:5000/profile/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
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
          <ListGroupItem>UserName: {profile.name}</ListGroupItem>
          <ListGroupItem>Email: {profile.email}</ListGroupItem>
          <ListGroupItem>Education:{profile?.education}</ListGroupItem>
          <ListGroupItem>Phone:{profile?.phone}</ListGroupItem>
          <ListGroupItem>Location:{profile?.location}</ListGroupItem>
          <ListGroupItem>Linkedin:{profile?.linkedin}</ListGroupItem>
          <ListGroupItem>About:{profile?.about}</ListGroupItem>
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
              name="name"
              id=""
              placeholder="Name"
              required
            />{" "}
            <br />
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
