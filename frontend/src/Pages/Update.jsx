import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Update() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios(`http://localhost:5000/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);
  return (
    <div className="container mt-5">
      <h1>Update of {user.name}</h1>
      <div className="bg-warning p-3 rounded ">
        <h1>{user.email}</h1>
        <h1>{user.phone}</h1>
      </div>
    </div>
  );
}
