import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function Update() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  // fetch user data from database
  useEffect(() => {
    axios(`http://localhost:5000/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  // handle info changes
  const nameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const emailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const phoneChange = (e) => {
      setUser({ ...user, phone: e.target.value });
  };

  // handle update user info
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify(user);
    axios
      .put(`http://localhost:5000/users/${id}`, user, { body }, { headers })
      .then((res) => {
        res.data.n === 1
          ? Swal.fire("Oops!", "Something went wrong!", "error")
          : Swal.fire("Good job!", "User updated!", "success");
      });
  };
  return (
    <div className="container mt-5">
      <div className="bg-warning p-3 rounded ">
        <form onSubmit={handleUpdateUser}>
          <input
            type="text"
            required
            name=""
            onChange={nameChange}
            value={user.name || ""}
            className="form-control mt-2"
            id=""
          />
          <input
            type="email"
            required
            name=""
            onChange={emailChange}
            value={user.email || ""}
            className="form-control mt-2"
            id=""
          />
          <input
            type="number"
            required
            name=""
            onChange={phoneChange}
            value={user.phone || ""}
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
