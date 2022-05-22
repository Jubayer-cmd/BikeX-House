import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "./../../firebase.init";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    toast("Logging Out successfully");
    navigate("/");
  };
  return (
    <div style={{ background: "blue" }}>
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-white">
            <img
              height={50}
              src={
                "https://i.ibb.co/ZfD6xrC/cycling-design-with-mountain-background-badge-logo-other-157713-319-removebg-preview.png"
              }
              alt="jfdh"
            />
            BikeX-House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink
                as={Link}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "fs-5 text-warning px-3"
                    : "fs-5 text-white text-decoration-none px-3"
                }
              >
                Home
              </NavLink>
              <NavLink
                as={Link}
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "fs-5 text-warning px-3"
                    : "fs-5 text-white text-decoration-none px-3"
                }
              >
                Blogs
              </NavLink>
              <NavLink
                as={Link}
                to="/Portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "fs-5 text-warning px-3"
                    : "fs-5 text-white text-decoration-none px-3"
                }
              >
                Portfolio
              </NavLink>
              <NavLink
                as={Link}
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "fs-5 text-warning px-3"
                    : "fs-5 text-white text-decoration-none px-3"
                }
              >
                Dashboard
              </NavLink>
              {user ? (
                <>
                  <NavLink
                    as={Link}
                    to="/order"
                    className={({ isActive }) =>
                      isActive
                        ? "fs-5 text-warning px-3"
                        : "fs-5 text-white text-decoration-none px-3"
                    }
                  >
                    My items
                  </NavLink>
                  <Button onClick={logout}>SignOut</Button>
                </>
              ) : (
                <NavLink
                  as={Link}
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "fs-5 text-warning px-3"
                      : "fs-5 text-white text-decoration-none px-3"
                  }
                >
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
