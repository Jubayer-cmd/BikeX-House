import React from "react";
import { Spinner } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import useToken from "./../Hooks/useToken";

const Sigup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const [token] = useToken(user);

  if (token) {
    navigate("/");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/");
  };
  return (
    <div
      className="d-flex justify-content-center m-5"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <div className="card mb-3 shadow bg-white rounded">
        <div className="row no-gutters">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?t=st=1651841311~exp=1651841911~hmac=495bb2fd770d11eae4c9c37f3e7e14e0cd1a94fcff236fd8caf77d1a9e269c3d&w=740"
              className="img-fluid w-100"
              alt="..."
            />
          </div>
          <div
            style={{ backgroundColor: "#DEE0FF" }}
            className="col-md-6 d-flex align-items-center border-start"
          >
            <div className="card-body">
              <form className="text-center m-2" onSubmit={handleRegister}>
                <h1 className="text-primary">Register</h1>
                <input
                  className=" w-100 mb-2 p-2"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Name"
                  required
                />{" "}
                <br />
                <input
                  className=" w-100 mb-2 p-2"
                  type="email"
                  name="email"
                  id=""
                  placeholder="E-mail"
                  required
                />{" "}
                <br />
                <input
                  className=" w-100 mb-2 p-2"
                  type="Password"
                  name="password"
                  id=""
                  placeholder="Password"
                  required
                />{" "}
                {loading && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                {error}
                <br />
                <input
                  className=" w-100 mb-2 bg-primary text-white border-0 p-2 rounded "
                  type="submit"
                  value="Register"
                />
                <p>
                  Already have an account? <Link to={"/login"}>login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sigup;
