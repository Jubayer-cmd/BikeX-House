import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Dashing from "./Components/Dashing/Dashing";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Portfolio from "./Components/Portfolio/Portfolio";
import Signin from "./Components/SignIn/Signin";
import Sigup from "./Components/SignUp/Sigup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/login" element={<Signin></Signin>}></Route>
        <Route path="/register" element={<Sigup></Sigup>}></Route>
        <Route path="/dashboard" element={<Dashing></Dashing>}></Route>
      </Routes>
    </div>
  );
}

export default App;
