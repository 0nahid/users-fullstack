import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mt-5">
      {users.map((user) => (
        <div key={user._id} className="mt-1 p-3 bg-dark text-white rounded">
          <h1>Name: {user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <div>
            <Link to="/users/update">
              {" "}
              <button className="btn btn-primary mx-1">Update</button>
            </Link>
            <button className="btn btn-danger mx-1">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
