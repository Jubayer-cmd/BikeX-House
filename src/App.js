import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Dashing from "./Components/Dashing/Dashing";
import Order from "./Components/Dashing/Order";
import Profile from "./Components/Dashing/Profile";
import Review from "./Components/Dashing/Review";
import Users from "./Components/Dashing/Users";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Portfolio from "./Components/Portfolio/Portfolio";
import Purchase from "./Components/Purchase/Purchase";
import RequireAdmin from "./Components/RequireAdmin/RequireAdmin";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Signin from "./Components/SignIn/Signin";
import Sigup from "./Components/SignUp/Sigup";

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/login" element={<Signin></Signin>}></Route>
        <Route path="/register" element={<Sigup></Sigup>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashing></Dashing>
            </RequireAuth>
          }
        >
          <Route index element={<Profile></Profile>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="order" element={<Order></Order>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
