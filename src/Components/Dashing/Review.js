import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Review = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const ratings = event.target.ratings.value;
    const review = event.target.review.value;
    const reviews = {
      rating: ratings,
      review: review,
      email: user?.email,
      image: user?.photoURL,
      username: user?.displayName,
    };
    // console.log(reviews);
    fetch("https://morning-castle-26727.herokuapp.com/review", {
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
          toast.success("Reviews Added successfully!");
        } else {
          toast.error("Fail to add Reviews");
        }
      });
  };
  return (
    <div className="text-center">
      <div>
        <h1 className="text-primary">Enter Your review here</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="w-75 p-2 mb-2"
            type="number"
            name="ratings"
            placeholder="Enter Your ratings"
            id=""
            min="1"
            max="5"
            step="0.01"
            required
          />{" "}
          <br />
          <textarea
            name="review"
            id=""
            cols="103"
            rows="5"
            placeholder="Enter your review"
            required
          ></textarea>
          <br />
          <input
            className="bg-primary border-0 p-2 mb-5 rounded text-white"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
