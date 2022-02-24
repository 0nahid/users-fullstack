import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function Update() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  // const [user, setUser] = useState({});
  useEffect(() => {
    axios(`http://localhost:5000/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);
  const handleInfoChange = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);

  };
  const handleUpdateUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/users/${id}`, user).then((res) => {
      if (res.data.n === 1) {
        Swal.fire("Good job!", "User updated!", "success");
      } else {
        Swal.fire("Oops!", "Something went wrong!", "error");
      }
    });
  };
  return (
    <div className="container mt-5">
      <h1>
        Update of {user.name} && {user.email}
      </h1>
      <div className="bg-warning p-3 rounded ">
        {/* <h1>{user.email}</h1>
        <h1>{user.phone}</h1> */}
        <form onSubmit={handleUpdateUser}>
          <input
            type="text"
            name=""
            onChange={handleInfoChange}
            value={user.name || ""}
            className="form-control mt-2"
            id=""
          />
          <input
            type="email"
            name=""
            value={user.email || ""}
            onChange={handleInfoChange}
            className="form-control mt-2"
            id=""
          />
          <input
            type="number"
            name=""
            value={user.phone || ""}
            onChange={handleInfoChange}
            className="form-control mt-2"
            id=""
          />
          <input
            type="submit"
            className="btn btn-primary mt-2"
            value="Update user"
          />
        </form>
      </div>
    </div>
  );
}
