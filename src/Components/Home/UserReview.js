import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
const UserReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [review]);
  return (
    <section>
      <header className="section-header">
        <h2>Our Values</h2>
        <p>Your Satisfactions is our main priority</p>
      </header>
      <div className="product-container">
        {review.map((user) => (
          <UserRow key={user._id} user={user}></UserRow>
        ))}
      </div>
    </section>
  );
};

export default UserReview;
