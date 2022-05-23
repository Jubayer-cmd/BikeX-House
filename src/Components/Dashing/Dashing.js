import React from "react";
import { ListGroup } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "./../../firebase.init";
import useAdmin from "./../Hooks/useAdmin";

const Dashing = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="d-flex">
      <div className="w-25 my-3 mx-3 text-center">
        <ListGroup>
          <ListGroup.Item>
            <Link to="/dashboard">My Profile</Link>
          </ListGroup.Item>
          {!admin && (
            <>
              <ListGroup.Item>
                <Link to="/dashboard/order">My Orders</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/dashboard/review">Add a review</Link>
              </ListGroup.Item>
            </>
          )}
          {admin && (
            <>
              <ListGroup.Item>
                <Link to="/dashboard/users">Users</Link>
              </ListGroup.Item>
            </>
          )}
        </ListGroup>
      </div>
      <div className="mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashing;
