import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddUser from "./Pages/AddUser";
import Nav from "./Pages/Nav";
import Update from "./Pages/Update";
import User from "./Pages/User";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/addUser" element={<AddUser />} />
        <Route path="/users/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}
